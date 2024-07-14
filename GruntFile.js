module.exports = function(grunt) {

    // Configuração do Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            paths: ['./src/less'], // Caminho dos arquivos LESS
          },
          files: {
            './dist/css/styles.css': 'src/less/main.less' // Arquivo de destino da compilação LESS
          }
        }
      },
      uglify: {
        build: {
          src: './src/js/*.js', // Arquivos de origem que serão minificados
          dest: './dist/js/script.min.js' // Arquivo de destino minificado
        }
      }
    });
  
    // Carregar plugins do Grunt necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefa padrão do Grunt
    grunt.registerTask('default', ['less', 'uglify']);

  };
  
  