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
      public/javascript/js-chat.js
    }
    sh "jsdoc.pl #{opts.join(' ')} #{files.join(' ')}"
  end

  desc 'Remove generated docs'
  task :clear do
    sh "rm -rf #{File.join(DOCROOT, 'api')}"
  end
end
