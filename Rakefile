ROOT    = File.dirname(__FILE__)
DOCROOT = File.join(ROOT, 'doc')

desc 'Rebuild the API docs'
task :doc do
  Rake::Task['doc:clear'].invoke
  Rake::Task['doc:api'].invoke
end

namespace :doc do
  desc 'Generate API docs (requires jsdoc.pl in PATH)'
  task :api do
    opts = []
    opts << "--private"
    opts << "--project-name js-chat"
    opts << "--directory " + File.join(DOCROOT, 'api')
    files = %w{
      js-chat.js
    }
    sh "jsdoc.pl #{opts.join(' ')} #{files.join(' ')}"
  end

  desc 'Remove generated docs'
  task :clear do
    sh "rm -rf #{File.join(DOCROOT, 'api')}"
  end

  desc 'Update the Github page with the README'
  task :github do
    sh "git checkout master"  # make sure we're on master
    sh "cp #{File.join(DOCROOT, 'README.html')} #{ROOT}/gh-temp.html"
    sh "git checkout gh-pages"
    sh "mv gh-temp.html index.html"
  end
end
