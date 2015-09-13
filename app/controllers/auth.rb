get '/' do
	@waiting_players = User.all
	erb :lobby
end

get '/logout' do
	session.clear
	redirect '/'
end

post '/play_game' do
  redirect '/game'
end


get '/signup' do
	erb :signup, :layout => false
end

get '/login' do
   erb :login, :layout => false
end

get '/reset_board' do
@board = Array.new(9)
	redirect '/'
end
