<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<link rel="apple-touch-icon" sizes="57x57" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?= get_template_directory_uri() ?>/img/icons/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="<?= get_template_directory_uri() ?>/img/icons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?= get_template_directory_uri() ?>/img/icons/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="<?= get_template_directory_uri() ?>/img/icons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="<?= get_template_directory_uri() ?>/img/icons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="<?= get_template_directory_uri() ?>/img/icons/manifest.json">
	<link rel="mask-icon" href="<?= get_template_directory_uri() ?>/img/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="<?= get_template_directory_uri() ?>/img/icons/favicon.ico">
	<meta name="msapplication-TileColor" content="#ffc40d">
	<meta name="msapplication-TileImage" content="<?= get_template_directory_uri() ?>/img/icons/mstile-144x144.png">
	<meta name="msapplication-config" content="<?= get_template_directory_uri() ?>/img/icons/browserconfig.xml">
	<meta name="theme-color" content="#b88f2e">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<main id="page" class="site">