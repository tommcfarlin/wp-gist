<?php

class WP_Gist_Shortcode_Notice {

    /* Properties
    ---------------------------------------------------------------------------------- */

    /**
     * Instance of the class.
     *
     * @var WP_Gist_Shortcode_Notice
     */
    protected static $instance = null;

    /**
     * Class nonce.
     *
     * @var string
     */
    protected $nonce = 'wp_gist_shortcode_notice_nonce';

    /**
     * Class slug.
     *
     * @var string
     */
    protected $slug = 'wp-gist-shortcode-notice';

    /**
     * Class updated.
     *
     * @var string
     */
    protected $updated = 'wp_gist_shortcode_updated';

    /* Public
    ---------------------------------------------------------------------------------- */

    /**
     * Gets instance of class.
     *
     * @return WP_Recipe_Shortcode Instance of the class.
     */
    public static function get_instance() {

        if ( null == self::$instance ) {

            self::$instance = new self;

        }

        return self::$instance;

    }

    /* Constructor
    ---------------------------------------------------------------------------------- */

    /**
     * Initialize class.
     */
    public function __construct() {

        if ( $this->is_updating_shortcode() ) {

            add_action( 'admin_init', array( $this, '__update' ) );
            
        } else if ( $this->shortcode_has_not_been_updated() && $this->old_shortcode_found_in_posts() ) {

            add_action( 'admin_enqueue_scripts', array( $this, '__enqueue_styles' ) );
            add_action( 'admin_notices', array( $this, '__render' ) );

        }

    }

    /* Private
    ---------------------------------------------------------------------------------- */

    /**
     * Enqueues styles.
     */
    public function __enqueue_styles() {

        $wp_enqueue_util = WP_Enqueue_Util::get_instance();
        $wp_gist = WP_Gist::get_instance();

        $handle = $wp_gist->get_slug() . '-admin-styles';
        $relative_path = __DIR__ . '/../admin/css/';
        $filename = 'admin.min.css';
        $filename_debug = 'admin.css';
        $dependencies = array();
        $version = $wp_gist->get_version();

        $options = new WP_Enqueue_Options(
            $handle,
            $relative_path,
            $filename,
            $filename_debug,
            $dependencies,
            $version
        );

        $wp_enqueue_util->enqueue_style( $options );

    }
    
    /**
     * Renders view.
     */
    public function __render() {

        echo '<div class="wp-gist-shortcode-notice">';
            echo '<form method="post" action="">';
                echo wp_nonce_field( $this->slug, $this->nonce );
                echo '<span class="message">WP Gist needs to change the shortcode from <code>gist</code> to <code>wpgist</code>. <a class="learn-more" href="https://github.com/manovotny/wp-gist/issues/26" title="Learn more about the WP Gist shortcode update." target="_blank">Learn more</a></span>';
                echo '<input id="wp-gist-shortcode-notice" class="button button-primary" type="submit" name="wp-gist-shortcode-notice" value="Update">';
            echo '</form>';
        echo '</div>';

    }

    /**
     * Updates shortcode.
     */
    public function __update() {

        if ( $this->can_user_update_shortcode( $this->nonce ) ) {

            global $wpdb;

            $success = $wpdb->query(
                "
                UPDATE
                    $wpdb->posts
                SET
                    post_content = REPLACE(post_content, '[gist', '[wpgist')
                WHERE
                    post_content LIKE CONCAT('%', '[gist', '%')
                "
            );

            if ( false !== $success ) {

                $this->record_shorcode_has_been_updated();

            }

        }

    }

    /**
     * Verifies the user has triggered the update of the shortcode.
     *
     * @param string $nonce The nonce for updating the shortcode.
     * @return boolean Whether the user triggered the update or not.
     */
    private function can_user_update_shortcode( $nonce ) {

        return ( isset( $_POST[ $nonce ] ) && wp_verify_nonce( $_POST[ $nonce ], $this->slug ) );

    }

    /**
     * Checks to see of any posts have the old shortcode in them or not.
     * 
     * @return boolean Whether any posts have the old shortcode in them or not.
     */
    private function old_shortcode_found_in_posts() {

        global $wpdb;

        $posts_using_shortcode = $wpdb->query(
            "
            SELECT
                ID
            FROM
                $wpdb->posts
            WHERE
                post_content LIKE CONCAT('%', '[gist', '%')
            "
        );

        return ( ! empty( $posts_using_shortcode ) );

    }

    /**
     * Records that the shortcode has been updated.
     */
    private function record_shorcode_has_been_updated() {

        update_option( $this->updated, true );

    }

    /**
     * Determines whether the shortcode has been updated.
     *
     * @return boolean Whether the shortcode has been updated or not.
     */
    private function shortcode_has_not_been_updated() {

        return ( false === get_option( $this->updated ) );

    }
    
    /**
     * Determines whether the shortcode is in the process up updating.
     * 
     * @return boolean Whether the shortcode is in the process of updating or not.
     */
    
    private function is_updating_shortcode() {
    
        return ( isset( $_POST[ $this->slug ] ) && isset( $_POST[ $this->nonce ] ) );
        
    }

}