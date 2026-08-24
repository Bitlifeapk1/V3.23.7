<?php
/**
 * CAVA Menu Guide functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package cava-menu-guide
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue scripts and styles.
 */
function cava_menu_guide_scripts() {
	$theme_version = wp_get_theme()->get( 'Version' );
    $theme_dir_uri = get_stylesheet_directory_uri();

	// Enqueue main stylesheet (cava.css)
	wp_enqueue_style( 'cava-menu-guide-style', $theme_dir_uri . '/assets/css/cava.css', array(), filemtime( get_stylesheet_directory() . '/assets/css/cava.css' ) );

	// Enqueue data.js
	wp_enqueue_script( 'cava-menu-guide-data', $theme_dir_uri . '/assets/js/data.js', array(), filemtime( get_stylesheet_directory() . '/assets/js/data.js' ), true );

	// Enqueue app.js
	wp_enqueue_script( 'cava-menu-guide-app', $theme_dir_uri . '/assets/js/app.js', array( 'cava-menu-guide-data' ), filemtime( get_stylesheet_directory() . '/assets/js/app.js' ), true );

	// Localize script to pass the theme directory URI to JavaScript
	wp_localize_script( 'cava-menu-guide-app', 'cavaWpData', array(
		'themeUrl' => $theme_dir_uri
	) );
}
add_action( 'wp_enqueue_scripts', 'cava_menu_guide_scripts', 20 ); // Priority 20 to load after Kadence parent styles
