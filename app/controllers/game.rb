post '/game' do
  @details = params[:new_player]
  @player_one = User.find_or_create_by(@details)
  @player_one.games.create(player_1: @player_one.id)
  @game = Game.find_by(player_1: @player_one.id)
  session[:user_id] = @player_one.id

  redirect "/game/#{@game.id}"
end

get '/game/:id' do
	@game = Game.find(params[:id])
  @player_one = User.find(@game.player_1)

  if (@game.player_2.nil? == false)
    @player_two = User.find(@game.player_2)
  end

  @board = Array.new(9)
  erb :board
end

get '/challenge/:id' do
  @game = Game.find(params[:id])

  erb :join_game, :layout => false
end

post '/join_game/:id' do
  @details = params[:new_player]
  @player_two = User.create(@details)
  session[:user_id] = @player_two.id
  @game = Game.find(params[:id])
  @game.update(player_2: @player_two.id)

  redirect "/game/#{@game.id}"
end