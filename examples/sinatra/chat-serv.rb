# Simple Sinatra app to test/demo js-chat.
%w(
  rubygems
  sinatra
  erb
).each { |dependency| require dependency }

# Basic example Message class.
class Message
  attr_accessor :name, :body

  def initialize(attrs = {})
    @name = attrs['name'] || attrs[:name]
    @body = attrs['body'] || attrs[:body]
  end

  def to_s
    "#{name}: #{body}"
  end

  # 'Saves' the message to the 'database' (see Message.all).
  def save
    self.class.all << self
    self
  end

  class << self
    # This is the 'database' that stores all the messages.
    def all
      @@messages ||= []
    end
  end
end

# Setup the Sinatra app.
configure do
  # Holds javascript, stylesheets, etc.
  set :public, File.dirname(__FILE__) + '/public'

  # Create a few test messages.
  3.times do |i|
    attrs = { 'name' => "Robot-#{i}", 'body' => "Prime directive #{rand(i + 1000)}" }
    Message.new(attrs).save
  end
end

# Front end; form and shit.
get '/' do
  headers 'Content-Type' => 'text/html; charset=utf-8'
  @messages = Message.all
  erb :home
end

# Returns the messages as a big ass string.
get '/messages' do
  Message.all.map { |message| message.to_s }.join("\n")
end

# Creates a new Message.
post '/messages' do
   Message.new(params['message']).save
end
