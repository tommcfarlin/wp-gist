<?php
/**
 * WP Gist - Admin Notice.
 *
 * This will display if the user needs to update the shortcode.
 *
 * @package     WP_Gist
 * @author      Michael Novotny <manovotny@gmail.com>
 * @license     GPL-3.0+
 * @link        https://github.com/manovotny/wp-gist
 * @copyright   2014 Michael Novotny
 */
?>

<div class="wp-gist-shortcode-notice">
    <form method="post" action="">
        <?php wp_nonce_field( WP_Gist_Shortcode_Notice::get_instance()->slug, WP_Gist_Shortcode_Notice::get_instance()->nonce ); ?>
        <span class="message">WP Gist needs to change the shortcode from <code>gist</code> to <code>wpgist</code>. <a class="learn-more" href="https://github.com/manovotny/wp-gist/issues/26" title="Learn more about the WP Gist shortcode update." target="_blank">Learn more</a></span>
        <input id="wp-gist-shortcode-notice" class="button button-primary" type="submit" name="wp-gist-shortcode-notice" value="Update">
    </form>
</div>