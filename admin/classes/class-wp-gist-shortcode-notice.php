<?php
/**
 * WP Gist - Shortcode Notice
 *
 * @package     WP_Gist
 * @author      Michael Novotny <manovotny@gmail.com>
 * @license     GPL-3.0+
 * @link        https://github.com/manovotny/wp-gist
 * @copyright   2014 Michael Novotny
 */

/*
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ CONTENTS /\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\

    1. Properties
    2. Constructor
    3. Actions
    4. Helpers

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\
*/

class WP_Gist_Shortcode_Notice {

    /* Properties
    ---------------------------------------------------------------------------------- */

    /* Instance
    ---------------------------------------------- */

    /**
     * Instance of the WP_Gist_Shortcode_Notice class.
     *
     * @access      protected static
     * @var         WP_Gist_Shortcode_Notice
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    protected static $instance = null;

    /**
     * Get accessor method for instance property.
     *
     * @return      WP_Gist_Shortcode_Notice   Instance of the WP_Gist_Shortcode_Notice class.
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    public static function get_instance() {

        // Check if an instance has not been created yet.
        if ( null == self::$instance ) {

            // Set instance of class.
            self::$instance = new self;

        } // end if

        // Return instance.
        return self::$instance;

    } // end get_instance

    /* Nonce
    ---------------------------------------------- */

    /**
     * Plugin nonce.
     *
     * @access      public
     * @var         string
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    public $nonce = 'wp_gist_shortcode_notice_nonce';

    /* Slug
    ---------------------------------------------- */

    /**
     * Plugin unique identifier.
     *
     * @access      public
     * @var         string
     *
     * @since       3.0.0
     * @version     1.1.0
     */
    public $slug = 'wp-gist-shortcode-notice';

    /* Version
    ---------------------------------------------- */

    /**
     * Plugin version, used for cache-busting of style and script file references.
     *
     * @access      protected
     * @var         string
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    protected $version = '3.0.0';

    /* Constructor
    ---------------------------------------------------------------------------------- */

    /**
     * Initializes plugin.
     *
     * @since       2.0.0
     * @version     1.0.0
     */
    public function __construct() {

        // Check if the shortcode needs updating and if the old shortcode is being used in any posts.
        if ( $this->shortcode_needs_updating() && $this->old_shortcode_in_posts() ) {

            // Register styles.
            add_action( 'admin_enqueue_scripts', array( $this, 'wp_gist_shortcode_notice_styles' ) );

            // Register admin notice.
            add_action( 'admin_notices', array( $this, 'wp_gist_shortcode_notice_message' ) );

            // Register update shortcode.
            add_action( 'admin_init', array( $this, 'wp_gist_update_shortcode' ) );

        } else {

            // Record that the old shortcode has been updated.
            $this->save_shortcode_updated();

        } // end if / else

    } // end constructor

    /* Actions
    ---------------------------------------------------------------------------------- */

    /**
     * Displays the shortcode notice message in the admin.
     * 
     * @since       3.0.0
     * @version     1.0.0
     */
    public function wp_gist_shortcode_notice_message() {

        // Check shortcode needs updating.
        if ( $this->shortcode_needs_updating() ) {

            // Display shortcode notice.
            include_once realpath( __DIR__ . '/../views/shortcode-notice.php' );

        } // end if

    } // end wp_gist_shortcode_notice_message

    /**
     * Registers shortcode notice styles.
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    public function wp_gist_shortcode_notice_styles() {

        // Check shortcode needs updating.
        if ( $this->shortcode_needs_updating() ) {

            // Load shortcode notice styles.
            wp_enqueue_style( $this->slug . '-style', plugins_url( WP_Gist::get_instance()->slug . '/admin/css/shortcode-notice.min.css' ), false, $this->version );

        } // end if

    } // end wp_gist_shortcode_notice_styles

    /**
     * Updates the old shortcode to the new shortcode.
     * 
     * @since       3.0.0
     * @version     1.0.0
     */
    public function wp_gist_update_shortcode() {

        // Check shortcode needs updating and user decided to update shortcode.
        if ( $this->shortcode_needs_updating() && $this->can_user_update_shortcode( $this->nonce ) ) {

            global $wpdb;

            // Update shortcode and capture results.
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

            // Check for successful update.
            if ( false !== $success ) {

                // Record that the old shortcode has been updated.
                $this->save_shortcode_updated();

            } // end if

        } // end if

    } // end wp_gist_update_shortcode

    /* Helpers
    ---------------------------------------------------------------------------------- */

    /**
     * Verifies the user has triggered the update of the shortcode.
     * 
     * @param   string  $nonce  The nonce for updating the shortcode.
     * @return  boolean         Whether the user triggered the update or not.
     * 
     * @since       3.0.0
     * @version     1.0.0
     */
    private function can_user_update_shortcode( $nonce ) {

        return ( isset( $_POST[ $nonce ] ) && wp_verify_nonce( $_POST[ $nonce ], $this->slug ) );

    } // end can_user_update_shortcode

    /**
     * Checks to see of any posts have the old shortcode in them or not.
     * 
     * @return  boolean     Whether any posts have the old shortcode in them or not.
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    private function old_shortcode_in_posts() {

        global $wpdb;

        // Check if any posts are using the shortcode.
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

    } // end old_shortcode_in_posts

    /**
     * Records that the shortcode has been updated.
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    private function save_shortcode_updated() {

        // Record that shortcode has been updated.
        update_option( 'wp_gist_shortcode_updated', true );

    } // end save_shortcode_updated

    /**
     * Checks to see if the shortcode update process has been ran or not.
     *
     * @return  boolean     Whether the shortcode update process has ran or not.
     *
     * @since       3.0.0
     * @version     1.0.0
     */
    private function shortcode_needs_updating() {

        return ( false === get_option( 'wp_gist_shortcode_updated' ) );

    } // end shortcode_needs_updating

} // end class