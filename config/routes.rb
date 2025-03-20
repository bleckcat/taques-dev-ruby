Rails.application.routes.draw do
  get "users/new"
  root "pages#home"
  get "about_me", to: "pages#about_me"
  get "login", to: "sessions#new"
  get "signup", to: "users#new"
end
