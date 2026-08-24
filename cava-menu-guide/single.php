<?php
/**
 * The template for displaying all single posts
 *
 * @package cava-menu-guide
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container" style="padding-top: 3rem; padding-bottom: 5rem;">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('editorial-section'); ?> style="padding: 0;">
                <header class="entry-header section-header" style="text-align: left; margin-bottom: 2rem; max-width: 800px;">
                    <?php
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) {
                        echo '<span class="section-tag">' . esc_html( $categories[0]->name ) . '</span>';
                    }
                    ?>
                    <?php the_title( '<h1 class="entry-title section-title" style="font-size: 2.5rem; margin-top: 1rem;">', '</h1>' ); ?>
                    <div class="entry-meta" style="color: var(--text-muted); font-size: 0.95rem; margin-top: 1.5rem; display: flex; align-items: center; gap: 1.5rem;">
                        <span>📅 <?php echo get_the_date(); ?></span>
                        <span>👤 <?php the_author(); ?></span>
                    </div>
                </header><!-- .entry-header -->

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="post-thumbnail" style="margin-bottom: 3rem; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md);">
                        <?php the_post_thumbnail('full', array('style' => 'width: 100%; height: auto; max-height: 500px; object-fit: cover; display: block;')); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content editorial-content-grid">
                    <div class="editorial-main-text">
                        <?php
                        // The post content goes here
                        the_content();
                        ?>
                    </div>
                    
                    <!-- Sidebar Area -->
                    <div class="editorial-sidebar-cards">
                        <div class="feature-card highlight-card" style="position: sticky; top: 100px;">
                            <span class="feature-card-icon">📌</span>
                            <h4>About This Guide</h4>
                            <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted); line-height: 1.6;">
                                This guide is regularly updated with the latest CAVA menu pricing, calorie information, and nutrition facts. Prices and options may vary slightly by location.
                            </p>
                            <a href="<?php echo home_url(); ?>#builder-studio" class="btn-primary" style="display: block; text-align: center; margin-top: 1rem; padding: 0.75rem 1rem; font-size: 0.9rem;">
                                🥗 Build Your Bowl
                            </a>
                        </div>
                    </div>
                </div><!-- .entry-content -->
            </article><!-- #post-<?php the_ID(); ?> -->
            <?php
        endwhile; // End of the loop.
        ?>
    </div>
</main><!-- #main -->

<?php
get_footer();
