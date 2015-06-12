<?php

class WP_Gist_Enqueue_Styles {

    /* Properties
    ---------------------------------------------------------------------------------- */

    /**
     * Instance of the class.
     *
     * @var WP_Gist_Enqueue_Styles
     */
    protected static $instance = null;

    /* Constructor
    ---------------------------------------------------------------------------------- */

    /**
     * Initialize class.
     */
    function __construct() {

        add_action( 'wp_enqueue_scripts', array( $this, '__enqueue_styles' ), 1000 );

    }

    /* Public
    ---------------------------------------------------------------------------------- */

    /**
     * Gets instance of class.
     *
     * @return WP_Gist_Enqueue_Styles Instance of the class.
     */
    public static function get_instance() {

        if ( null == self::$instance ) {

            self::$instance = new self;

        }

        return self::$instance;

    }

    /* Private
    ---------------------------------------------------------------------------------- */

    /**
     * Enqueues styles.
     */
    public function __enqueue_styles() {

        $wp_enqueue_util = WP_Enqueue_Util::get_instance();
        $wp_gist = WP_Gist::get_instance();

        $handle = $wp_gist->get_slug() . '-styles';
        $relative_path = __DIR__ . '/../site/css/';
        $filename = 'site.min.css';
        $filename_debug = 'site.css';
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

}
