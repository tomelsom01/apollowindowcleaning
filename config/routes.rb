Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#index"
  get '/services', to: 'pages#service'
  get '/area', to: 'pages#area'
  get '/contact', to: 'contacts#index'
   post 'create_contact', to: 'contacts#create_contact'
end
