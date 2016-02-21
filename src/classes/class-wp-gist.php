<?php

class WP_Gist {

    /* Properties
    ---------------------------------------------------------------------------------- */

    /**
     * Instance of the class.
     *
     * @var WP_Gist
     */
    protected static $instance = null;

    /**
     * Class slug.
     *
     * @var string
     */
    protected $slug = 'wp-gist';

    /**
     * Class version.
     *
     * Used for cache-busting of style and script file references.
     */
    protected $version = '3.1.0';

    /* Public
    ---------------------------------------------------------------------------------- */

    /**
     * Gets instance of class.
     *
     * @return WP_Gist Instance of the class.
     */
    public static function get_instance() {

        if ( null == self::$instance ) {

            self::$instance = new self;

        }

        return self::$instance;

    }

    /**
     * Gets slug.
     *
     * @return string Slug.
     */
    public function get_slug() {

        return $this->slug;

    }

    /**
     * Gets version.
     *
     * @return string Version.
     */
    public function get_version() {

        return $this->version;

    }

}
