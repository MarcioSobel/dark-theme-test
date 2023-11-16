$(document).ready(function() {
    $('.theme-button').on('click', () => {
        
        // change theme
        let css = $(':root'),
            theme = css.attr('data-theme') == 'dark' ? 'light' : 'dark';
            css.attr('data-theme', theme);

        // change button label
        $('.theme-button').children().toggleClass('fa-moon fa-sun');
    });

    // update theme
    let userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
        $('.theme-button').trigger('click');
    }
});