<?php
/**
 * Automatically fired when the plugin is uninstalled.
 *
 * @package     WP_Gist
 * @author      Michael Novotny <manovotny@gmail.com>
 * @license     GPL-3.0+
 * @link        https://github.com/manovotny/wp-gist
 * @copyright   2014 Michael Novotny
 */

// Check that uninstall was triggerd by WordPress.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {

    // Illegal execution.
    exit;
}

// Set option.
$shortcode_option = 'wp_gist_shortcode_updated';

// Check for multisite.
if ( is_multisite() ) {

    global $wpdb;

    // Get blog ids.
    $blog_ids = $wpdb->get_col(
        "
        SELECT
            blog_id
        FROM
            $wpdb->blogs
        "
    );

    // Get current blog id.
    $current_blog_id = get_current_blog_id();

    // Loop over all blogs
    foreach ( $blog_ids as $blog_id ) {

        // Switch to blog.
        switch_to_blog( $blog_id );

        // Delete shortcode admin option.
        delete_option( $shortcode_option );

    } // end foreach

    // Switch back to current blog.
    switch_to_blog( $current_blog_id );

    // Delete site shortcode admin option.
    delete_site_option( $shortcode_option );

// Single site.
} else {

    // Delete shortcode admin option.
    delete_option( $shortcode_option );

} // end if / else