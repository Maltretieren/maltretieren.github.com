# This RAKEFILE is for Travis CI - generate a template branch out of the master and commit it to the
# repo. This is needed to provide the fork functionality...

require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"
require "fileutils"
require "rake/clean"

# http://greyblake.com/blog/2013/09/21/how-to-call-bash-not-shell-from-ruby/
require 'shellwords'


# Change your GitHub reponame
GITHUB_REPONAME = "Maltretieren/maltretieren.github.com"

namespace :my_tasks do 
	desc "Generate site on travis - if this fail it will also fail on github"
	 task :generate do
		Jekyll::Site.new(Jekyll.configuration({
		"source" => ".",
		"destination" => "_site"
		})).process
	end
	
	desc "Upload test results"
	task :uploadTestResults do
		puts "\n## Listing of folder tests/coverage"
		system("ls -la coverage")
		escaped_command = Shellwords.escape("cat coverage/PhantomJS/ 1.9.7/ (Linux)/lcof.info")
		system "bash -c #{escaped_command}"
	end
	
	task :deploy do
	  puts "\n## Deleting template branch"
	  status = system("git push origin --delete template")
	  puts status ? "Success" : "Failed"
	  puts "\n## Creating new template branch and switching to it"
	  status = system("git checkout -b template")
	  puts status ? "Success" : "Failed"
	  puts "\n## Remove _posts directory, but leave _posts/template folder intact"
      file_list = FileList.new('_posts/**/*').exclude('_posts/templates', '_posts/templates/*')
	  #rm_f file_list
      Dir.glob(file_list) do |my_text_file|
		if File.file?(my_text_file)
		  #puts "deleting file: #{my_text_file}..."
		  FileUtils.rm(my_text_file)
		elsif File.directory?(my_text_file)
		  #puts "deleting folder: #{my_text_file}..."
		  #FileUtils..rm_rf(my_text_file)
        end
      end
	  puts "\n## Pushing template branches to origin"
	  # >> /dev/null reduces log output in Travis
	  system("git add . -A")
	  system("git commit -m 'prepare for template' >> /dev/null")
	  status = system("git push origin template >> /dev/null")
	  puts status ? "Success" : "Failed"
	end

	require 'yaml'

	task :lintYml do
      d = Dir["./**/*.yml"]
      d.each do |file|
        begin
          puts "checking : #{file}"
          f =  YAML.load_file(file)
        rescue Exception
          puts "failed to read #{file}: #{$!}"
        end
      end
    end
end

# first generate the site to see if jekyll is working - after that test the JavaScript code...
task :default => ["my_tasks:generate", "my_tasks:uploadTestResults", "my_tasks:deploy", "my_tasks:lintYml"]