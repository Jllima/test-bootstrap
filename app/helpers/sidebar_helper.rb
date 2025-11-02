# app/helpers/sidebar_helper.rb
module SidebarHelper
  def sidebar_items
    [
      { name: "Menu", is_title: true },
      { name: "Dashboard", icon: "grid-fill", url: dashboard_index_path, key: "/dashboard", submenu: [] },
      { name: "Posts", icon: "grid-fill", url: posts_path, key: "/posts", submenu: [] },
      { name: "Usuários", icon: "people-fill", url: users_path, key: "/users", submenu: [
          { name: "Novo", url: new_user_path, key: "/users/new", submenu: [] },
          { name: "Listar", url: users_path, key: "/users", submenu: [] }
        ]
      },
      { name: "Configurações", is_title: true },
      { name: "Perfil", icon: "person-fill", url: "#", key: "/profile", submenu: [] }
    ]
  end
end
