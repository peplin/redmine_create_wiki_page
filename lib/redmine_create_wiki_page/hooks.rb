class RedmineCreateWikiPageHooks < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => 'create_wiki_page/init_create_wiki_page', :layout => false
end
