<?php
/**
 * WP Gist
 *
 * Adds support for GitHub Gist embeds in WordPress.
 *
 * @package     WP_Gist
 * @author      Michael Novotny <manovotny@gmail.com>
 * @license     GPL-3.0+
 * @link        https://github.com/manovotny/wp-gist
 * @copyright   2014 Michael Novotny
 *
 * @wordpress-plugin
 * Plugin Name:         WP Gist
 * Plugin URI:          https://github.com/manovotny/wp-gist
 * GitHub Plugin URI:   manovotny/wp-gist
 * Description:         Adds support for GitHub Gist embeds in WordPress.
 * Version:             3.0.0
 * Author:              Michael Novotny
 * Author URI:          http://manovotny.com
 * Text Domain:         English
 * License:             GPL-3.0+
 * License URI:         http://www.gnu.org/licenses/gpl-3.0.html
 * Domain Path:         /lang
 */

/*
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ CONTENTS /\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\

    1. Access
    2. Plugin
    3. Admin

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\
*/

/* Access
---------------------------------------------------------------------------------- */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {

    die;

} // end if

/* Plugin
---------------------------------------------------------------------------------- */

// Include plugin classes.
require_once( plugin_dir_path( __FILE__ ) . 'classes/class-wp-gist.php' );

// Load plugin.
add_action( 'plugins_loaded', array( 'WP_Gist', 'get_instance' ) );

/* Admin
---------------------------------------------------------------------------------- */

if ( is_admin() && ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) ) {

    // Include admin classes.
    require_once( plugin_dir_path( __FILE__ ) . 'admin/classes/class-wp-gist-shortcode-notice.php' );

    // Load admin.
    add_action( 'plugins_loaded', array( 'WP_Gist_Shortcode_Notice', 'get_instance' ) );

} // end if