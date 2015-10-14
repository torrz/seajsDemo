module.exports = function(grunt){
   
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),

          transport : {

               application : {          /*随便起 应该和组件符合的名称*/
                   options : {
                       // 是否采用相对地址
                       relative: false,
                       /*paths: ['script'],*/ // where is the module, default value is ['sea-modules']
                       format : 'application/dist/{{filename}}'  //生成的id的格式
                   },
                    files: [{
                        /*expand:true,*/
                         // 相对路径地址
                         'cwd':'src',
                         // 需要生成具名函数的文件集合
                         'src':['application.js','util.js','test.js'],
                         // 生成存放的文件目录。里面的目录结构与 src 里各个文件名带有的目录结构保持一致
                         'dest':'.build'
                    }]
               }
          },
          concat : {
               main : {
                    options : {
                         relative : true
                    },
                    files : {
                         'dist/application.js' : ['.build/application.js'],  // 合并.build/application.js文件到dist/application.js中
                         'dist/application-debug.js' : ['.build/application-debug.js']
                    }
               }
          },
          uglify : {
               main : {
                    files : {
                         'dist/application.js' : ['dist/application.js'] //对dist/application.js进行压缩，之后存入dist/application.js文件
                    }
               }
          },
          clean : {
               build : ['.build'] //清除.build文件
          }
     });
   
     grunt.loadNpmTasks('grunt-cmd-transport');
     grunt.loadNpmTasks('grunt-cmd-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-clean');
   
     grunt.registerTask('build',['transport','concat','uglify','clean'])
};