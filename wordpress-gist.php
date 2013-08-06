<?php
/**
 * WordPress Gist.
 *
 * Adds support for GitHub Gist embeds in WordPress.
 *
 * @package     WordPress_Gist
 * @author      Michael Novotny <manovotny@gmail.com>
 * @license     GPL-3.0+
 * @link        https://github.com/manovotny/wordpress-gist
 * @copyright   2013 Michael Novotny
 *
 * @wordpress-plugin
 * Plugin Name: WordPress Gist
 * Plugin URI:  https://github.com/manovotny/wordpress-gist
 * Description: Adds support for GitHub Gist embeds in WordPress.
 * Version:     2.0.0
 * Author:      Michael Novotny
 * Author URI:  http://manovotny.com
 * Text Domain: English
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Domain Path: /lang
 */

/*
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ CONTENTS /\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\

    1. Access
    3. Instantiation

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\
*/

/* Access
---------------------------------------------------------------------------------- */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {

    die;

} // end if

/* Instantiation
---------------------------------------------------------------------------------- */

// Include plugin files.
require_once( plugin_dir_path( __FILE__ ) . 'classes/class-wordpress-gist.php' );

// Create plugin instance.
WordPress_Gist::get_instance();