Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  
  resources :recipes do
    get 'featured', on: :collection
    get 'search', on: :collection

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
