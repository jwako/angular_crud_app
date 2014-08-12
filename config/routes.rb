Rails.application.routes.draw do

  root "top#show"
  resources :items, except: [:new, :edit]

end
