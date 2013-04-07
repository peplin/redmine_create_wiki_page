Redmine::Plugin.register :redmine_create_wiki_page do
  name 'Create Wiki Page plugin'
  author 'Christopher Peplin'
  description 'This plugin adds a shortcut to create a new wiki page on each existing page'
  version '0.1'
  url 'http://github.com/peplin/redmine-create-wiki'
end

require 'redmine_create_wiki_page/hooks.rb'
