Rails.application.routes.draw do
  get "home/index"
  root "pages#home"

  get "signup", to: "users#new"
  post "signup", to: "users#create"

  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  get "about_me", to: "pages#about_me"
end
