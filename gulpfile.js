/*global require*/
var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    privatePath = 'Resources/Private/',
    prismBasePath = 'node_modules/prismjs/',
    customBasePath = privatePath + 'JavaScript/';

gulp.task('build', function () {
    'use strict';
    gulp.start(['build-js', 'build-css']);
});

gulp.task('build-js', function () {
    'use strict';
    return gulp.src([
            prismBasePath + 'components/prism-core.min.js',
            prismBasePath + 'components/prism-markup.min.js',
            prismBasePath + 'components/prism-apacheconf.min.js',
            prismBasePath + 'components/prism-css.min.js',
            prismBasePath + 'components/prism-clike.min.js',
            prismBasePath + 'components/prism-javascript.min.js',
            prismBasePath + 'components/prism-json.min.js',
            prismBasePath + 'components/prism-bash.min.js',
            prismBasePath + 'components/prism-php.min.js',
            prismBasePath + 'components/prism-less.min.js',
            prismBasePath + 'components/prism-php-extras.min.js',
            prismBasePath + 'components/prism-sql.min.js',
            customBasePath + 'prism-typoscript.js',
            prismBasePath + 'plugins/toolbar/prism-toolbar.min.js',
            prismBasePath + 'plugins/file-highlight/prism-file-highlight.min.js',
            prismBasePath + 'plugins/line-numbers/prism-line-numbers.min.js',
            prismBasePath + 'plugins/show-language/prism-show-language.min.js',
            prismBasePath + 'plugins/command-line/prism-command-line.min.js'
    ])
        .pipe(concat('FsCodeSnippet.js'))
        .pipe(uglify())
        .pipe(gulp.dest('Resources/Public/JavaScript/'));
});

gulp.task('build-all-languages-js', function () {
    'use strict';
    return gulp.src([
        // check prisms components.js for order (dependencies)
        prismBasePath + 'components/prism-core.min.js',
        prismBasePath + 'components/prism-markup.min.js',
        prismBasePath + 'components/prism-apacheconf.min.js',
        prismBasePath + 'components/prism-css.min.js',
        prismBasePath + 'components/prism-clike.min.js',
        prismBasePath + 'components/prism-c.min.js',
        prismBasePath + 'components/prism-javascript.min.js',
        prismBasePath + 'components/prism-ruby.min.js',

        prismBasePath + 'components/prism-abap.min.js',
        prismBasePath + 'components/prism-actionscript.min.js',
        prismBasePath + 'components/prism-ada.min.js',
        prismBasePath + 'components/prism-apacheconf.min.js',
        prismBasePath + 'components/prism-apl.min.js',
        prismBasePath + 'components/prism-applescript.min.js',
        prismBasePath + 'components/prism-arduino.min.js',
        prismBasePath + 'components/prism-asciidoc.min.js',
        prismBasePath + 'components/prism-aspnet.min.js',
        prismBasePath + 'components/prism-autohotkey.min.js',
        prismBasePath + 'components/prism-autoit.min.js',
        prismBasePath + 'components/prism-bash.min.js',
        prismBasePath + 'components/prism-basic.min.js',
        prismBasePath + 'components/prism-batch.min.js',
        prismBasePath + 'components/prism-bison.min.js',
        prismBasePath + 'components/prism-brainfuck.min.js',
        prismBasePath + 'components/prism-bro.min.js',
        prismBasePath + 'components/prism-coffeescript.min.js',
        prismBasePath + 'components/prism-cpp.min.js',
        prismBasePath + 'components/prism-crystal.min.js',
        prismBasePath + 'components/prism-csharp.min.js',
        prismBasePath + 'components/prism-css.min.js',
        prismBasePath + 'components/prism-css-extras.min.js',
        prismBasePath + 'components/prism-d.min.js',
        prismBasePath + 'components/prism-dart.min.js',
        prismBasePath + 'components/prism-diff.min.js',
        prismBasePath + 'components/prism-django.min.js',
        prismBasePath + 'components/prism-docker.min.js',
        prismBasePath + 'components/prism-eiffel.min.js',
        prismBasePath + 'components/prism-elixir.min.js',
        prismBasePath + 'components/prism-erlang.min.js',
        prismBasePath + 'components/prism-fortran.min.js',
        prismBasePath + 'components/prism-fsharp.min.js',
        prismBasePath + 'components/prism-gherkin.min.js',
        prismBasePath + 'components/prism-git.min.js',
        prismBasePath + 'components/prism-glsl.min.js',
        prismBasePath + 'components/prism-go.min.js',
        prismBasePath + 'components/prism-graphql.min.js',
        prismBasePath + 'components/prism-groovy.min.js',
        prismBasePath + 'components/prism-haml.min.js',
        prismBasePath + 'components/prism-handlebars.min.js',
        prismBasePath + 'components/prism-haskell.min.js',
        prismBasePath + 'components/prism-haxe.min.js',
        prismBasePath + 'components/prism-http.min.js',
        prismBasePath + 'components/prism-icon.min.js',
        prismBasePath + 'components/prism-inform7.min.js',
        prismBasePath + 'components/prism-ini.min.js',
        prismBasePath + 'components/prism-j.min.js',
        prismBasePath + 'components/prism-jade.min.js',
        prismBasePath + 'components/prism-java.min.js',
        prismBasePath + 'components/prism-json.min.js',
        prismBasePath + 'components/prism-jolie.min.js',
        prismBasePath + 'components/prism-jsx.min.js',
        prismBasePath + 'components/prism-julia.min.js',
        prismBasePath + 'components/prism-keyman.min.js',
        prismBasePath + 'components/prism-kotlin.min.js',
        prismBasePath + 'components/prism-latex.min.js',
        prismBasePath + 'components/prism-livescript.min.js',
        prismBasePath + 'components/prism-less.min.js',
        prismBasePath + 'components/prism-lolcode.min.js',
        prismBasePath + 'components/prism-lua.min.js',
        prismBasePath + 'components/prism-makefile.min.js',
        prismBasePath + 'components/prism-markdown.min.js',
        prismBasePath + 'components/prism-matlab.min.js',
        prismBasePath + 'components/prism-mel.min.js',
        prismBasePath + 'components/prism-mizar.min.js',
        prismBasePath + 'components/prism-monkey.min.js',
        prismBasePath + 'components/prism-n4js.min.js',
        prismBasePath + 'components/prism-nasm.min.js',
        prismBasePath + 'components/prism-nginx.min.js',
        prismBasePath + 'components/prism-nim.min.js',
        prismBasePath + 'components/prism-nix.min.js',
        prismBasePath + 'components/prism-nsis.min.js',
        prismBasePath + 'components/prism-objectivec.min.js',
        prismBasePath + 'components/prism-ocaml.min.js',
        prismBasePath + 'components/prism-opencl.min.js',
        prismBasePath + 'components/prism-oz.min.js',
        prismBasePath + 'components/prism-parigp.min.js',
        prismBasePath + 'components/prism-parser.min.js',
        prismBasePath + 'components/prism-pascal.min.js',
        prismBasePath + 'components/prism-perl.min.js',
        prismBasePath + 'components/prism-php.min.js',
        prismBasePath + 'components/prism-php-extras.min.js',
        prismBasePath + 'components/prism-powershell.min.js',
        prismBasePath + 'components/prism-processing.min.js',
        prismBasePath + 'components/prism-prolog.min.js',
        prismBasePath + 'components/prism-protobuf.min.js',
        prismBasePath + 'components/prism-properties.min.js',
        prismBasePath + 'components/prism-puppet.min.js',
        prismBasePath + 'components/prism-pure.min.js',
        prismBasePath + 'components/prism-python.min.js',
        prismBasePath + 'components/prism-q.min.js',
        prismBasePath + 'components/prism-qore.min.js',
        prismBasePath + 'components/prism-r.min.js',
        prismBasePath + 'components/prism-reason.min.js',
        prismBasePath + 'components/prism-renpy.min.js',
        prismBasePath + 'components/prism-rest.min.js',
        prismBasePath + 'components/prism-rip.min.js',
        prismBasePath + 'components/prism-roboconf.min.js',
        prismBasePath + 'components/prism-rust.min.js',
        prismBasePath + 'components/prism-sas.min.js',
        prismBasePath + 'components/prism-sass.min.js',
        prismBasePath + 'components/prism-scala.min.js',
        prismBasePath + 'components/prism-scheme.min.js',
        prismBasePath + 'components/prism-scss.min.js',
        prismBasePath + 'components/prism-smalltalk.min.js',
        prismBasePath + 'components/prism-smarty.min.js',
        prismBasePath + 'components/prism-sql.min.js',
        prismBasePath + 'components/prism-stylus.min.js',
        prismBasePath + 'components/prism-swift.min.js',
        prismBasePath + 'components/prism-tcl.min.js',
        prismBasePath + 'components/prism-textile.min.js',
        prismBasePath + 'components/prism-twig.min.js',
        prismBasePath + 'components/prism-typescript.min.js',
        prismBasePath + 'components/prism-vbnet.min.js',
        prismBasePath + 'components/prism-verilog.min.js',
        prismBasePath + 'components/prism-vhdl.min.js',
        prismBasePath + 'components/prism-vim.min.js',
        prismBasePath + 'components/prism-wiki.min.js',
        prismBasePath + 'components/prism-xojo.min.js',
        prismBasePath + 'components/prism-yaml.min.js',
        customBasePath + 'prism-typoscript.js',
        prismBasePath + 'plugins/toolbar/prism-toolbar.min.js',
        prismBasePath + 'plugins/file-highlight/prism-file-highlight.min.js',
        prismBasePath + 'plugins/line-numbers/prism-line-numbers.min.js',
        prismBasePath + 'plugins/show-language/prism-show-language.min.js',
        prismBasePath + 'plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js',
        prismBasePath + 'plugins/command-line/prism-command-line.min.js'
    ])
        .pipe(concat('FsCodeSnippetAllLanguages.js'))
        .pipe(uglify())
        .pipe(gulp.dest('Resources/Public/JavaScript/'));
});

gulp.task('build-css', function () {
    'use strict';
    return gulp.src([
            prismBasePath + 'themes/*.css',
            prismBasePath + 'plugins/toolbar/prism-toolbar.css',
            prismBasePath + 'plugins/line-numbers/prism-line-numbers.css',
            prismBasePath + 'plugins/show-language/prism-show-language.css',
            prismBasePath + 'plugins/command-line/prism-command-line.css'
        ])
        .pipe(gulp.dest('Resources/Public/CSS/'));
});
