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
    # Make sure we're on master.
    sh "git checkout master"

    # Copy the files.
    sh "cp #{File.join(ROOT, 'js-chat.js')} #{ROOT}/js-chat.js.gh"
    sh "cp #{File.join(DOCROOT, 'README.html')} #{ROOT}/index.html.gh"
    sh "cp -r #{File.join(ROOT, 'test')} test.gh"
    sh "cp -r #{File.join(ROOT, 'examples/html')} demo.gh"

    # Checkout gh-pages and move them into place.
    sh "git checkout gh-pages"

    Dir["#{ROOT}/*.gh"].each do |file|
      replacement = File.join(ROOT, File.basename(file, '.gh'))
      sh "rm -rf #{replacement}"
      sh "mv #{file} #{replacement}"
    end
  end
end
