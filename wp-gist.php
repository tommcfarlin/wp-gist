<?php
/**
 * Plugin Name: WP Gist
 * Plugin URI: https://github.com/manovotny/wp-gist
 * Description: Adds support for GitHub Gist embeds in WordPress.
 * Version: 3.1.0
 * Author: Michael Novotny
 * Author URI: http://manovotny.com
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Domain Path: /lang
 * Text Domain: wp-gist
 * GitHub Plugin URI: https://github.com/manovotny/wp-gist
 */

/* Composer
---------------------------------------------------------------------------------- */

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {

    require_once __DIR__ . '/vendor/autoload.php';

}

/* Initialization
---------------------------------------------------------------------------------- */

require_once __DIR__ . '/src/initialize.php';