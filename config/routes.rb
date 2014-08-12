Rails.application.routes.draw do

  root "top#show"
  resources :items, except: [:new, :edit] do
  	get :list, on: :collection
  	get :detail, on: :member
  end

end
