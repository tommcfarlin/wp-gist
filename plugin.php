<?php
/*
Plugin Name: Standard Gist
Plugin URI: https://github.com/eightbit/plugins/tree/master/standard-gist
Description: Adds support for GitHub Gist embeds to Standard.
Version: 1.0.2
Author: Michael Novotny
Author URI: http://manovotny.com
Author Email: manovotny@gmail.com
License: GNU General Public License v3.0 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/


/*
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ CONTENTS /\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\

    1. Constructor
    2. Actions
    3. Shortcodes
    4. Instantiation

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\
*/


class Standard_Gist {

    /* Constructor
    ---------------------------------------------------------------------------------- */

    /**
     * Initializes the plugin by setting localization, filters, and administration functions.
     */
    function __construct() {

        // Add shortcode hook.
        add_shortcode( 'gist', array( $this, 'standard_gist_shortcode' ) );

        // Register scripts and styles.
        add_action( 'wp_enqueue_scripts', array( $this, 'standard_gist_enqueue_scripts' ), 1000 );

    } // end constructor


    /* Actions
    ---------------------------------------------------------------------------------- */

    /**
     * Registers and enqueues plugin-specific scripts and styles.
     */
    public function standard_gist_enqueue_scripts() {

        // Load plugin styles.
        wp_register_style( 'standard-gist-style', plugins_url( 'standard-gist/css/plugin.css' ) );
        wp_enqueue_style( 'standard-gist-style' );

    } // end standard_sticky_footer_enqueue_scripts



    /* Shortcodes
    ---------------------------------------------------------------------------------- */

    function standard_gist_shortcode( $atts, $content = null ) {

        // Extract shortcode attributes.
        extract( shortcode_atts( array( 'url' => '', 'file' => '' ), $atts ) );

        // Check that we at least have a Gist URL.
        if ( empty( $url ) ) {
            // No Gist URL.
            return '';
        } else {
            // Need to append a '.js' file extension to the Gist URL.
            $url .= '.js';
        }

        // Check for specific file in the Gist.
        if ( !empty( $file ) ) {
            // Append file to URL.
            $url .= '?file=' . $file;
        }

        // Construct Gist script and return.
        return '<script src="' . $url . '"></script>';
    }

} // end class


/* Instantiation
---------------------------------------------------------------------------------- */

new Standard_Gist();