<?php

class WP_Gist_Shortcode {

    /* Properties
    ---------------------------------------------------------------------------------- */

    /**
     * Instance of the class.
     *
     * @var WP_Gist_Shortcode
     */
    protected static $instance = null;

    /* Constructor
    ---------------------------------------------------------------------------------- */

    /**
     * Initialize class.
     */
    function __construct() {

        add_shortcode( 'wpgist', array( $this, '__render' ) );

    }

    /* Public
    ---------------------------------------------------------------------------------- */

    /**
     * Gets instance of class.
     *
     * @return WP_Gist_Shortcode Instance of the class.
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
     * Renders view.
     *
     * @param array $attributes Shortcode attributes.
     * @return string Rendered shortcode.
     */
    public function __render( $attributes ) {

        extract(
            shortcode_atts(
                array(
                    'file' => '',
                    'id' => '',
                    'url' => ''
                ),
                $attributes
            )
        );

        if ( empty( $id ) && empty( $url ) ) {

            return '<!-- Gist url or id is required by [wpgist] shortcode -->';
        }

        if ( ! empty( $id ) ) {

            $url = 'https://gist.github.com/' . $id . '.js';

        } else {

            $url .= '.js';

        }

        if ( ! empty( $file ) ) {

            $url .= '?file=' . $file;

        }

        return '<script src="' . $url . '"></script>';

    }

}
