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

  class << self
    # This is the 'database' that stores all the messages.
    def all
      @@messages ||= []
    end
  end
end

configure do
  set :public, File.dirname(__FILE__) + '/public'

  3.times do |i|
    attrs = { 'name' => "test-#{i}", 'body' => "content for #{i}" }
    Message.all << Message.new(attrs)
  end
end

# Front end.
get '/' do
  headers 'Content-Type' => 'text/html; charset=utf-8'
  @messages = Message.all
  erb :home
end

# Returns the messages in JSON format.
get '/messages' do
  Message.all.map { |message| message.to_s }.join("\n")
end

# Creates a new Message
post '/messages' do
  message = Message.new(params['message'])
  Message.all << message
  message
end
