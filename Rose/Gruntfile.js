/**
 * Created by a1 on 16/9/9.
 */
module.exports=function(grunt){
    var pkg=grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg:pkg,
        less:{
            development: {
                files: [{
                    expand:'true',//启用动态扩展
                    cwd:'project/less',//css文件源的文件夹
                    src:['*.less'],//导出的css和script的路径地址
                    dest:'project/build',//表示处理后的文件名或所在目录
                    ext:'.css'//处理后的css的文件后缀
                }]
            }
        },
        postcss: {
            options: {
                processors: [
                    require('postcss-px2rem')({remUnit: 75})
                ]
            },
            dist: {
                expand:true,//启用动态扩展
                flatten:true,//把路径简易化
                src: 'project/build/*.css',//导出的css和script的路径地址 把px转为rem
                dest: 'project/css'//处理后的css的文件后缀    把px转为rem
            }
        },
        clean: ["project/build"], //清除多余的文件夹
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'project/css',
                    src: ['*.css'],
                    dest: 'fillary/css',
                    ext: '-<%= pkg.version %>-<%= grunt.template.today("yyyy-mm-dd") %>.min.css'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*!ytg <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'project/js',
                    src: '*.js',
                    dest: 'fillary/js',
                    ext: '-<%= pkg.version %>-<%= grunt.template.today("yyyy-mm-dd") %>.min.js'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true,flatten: true, src: ['project/img/*'], dest: 'fillary/img', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    {expand: true,flatten: true, src: ['project/js/lib/*'], dest: 'fillary/js/lib'},

                    // flattens results to a single level
                    {expand: true, flatten: true, src: ['project/*.html'], dest: 'fillary', filter: 'isFile'},
                ],
            },
        },
        usemin: {
            html: 'fillary/*.html',
            options: {
                blockReplacements: {
                    css: function (block) {

                        var src = block.dest + "-" + pkg.version + "-" + grunt.template.today("yyyy-mm-dd") + ".min.css";

                        return '<link rel="stylesheet" href="' + src + '">';
                    },
                    js: function (block) {

                        var src = block.dest + "-" + pkg.version + "-" + grunt.template.today("yyyy-mm-dd") + ".min.js";

                        return '<script src="'+src+'"></script>';
                    }
                }
            }
        }



    });
    require('load-grunt-tasks')(grunt); //一次性下载多个插件（有两个参数，第二个参数是不下载的插件）
    grunt.registerTask('default', ['less','postcss','clean','cssmin','uglify','copy','usemin']);
};
