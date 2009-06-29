# Simple Sinatra app to test/demo js-chat.
%w(
  rubygems
  sinatra
  erb
  json
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

  def to_json
    "{ 'name': '#{name}', 'body': '#{body}' }"
  end

  class << self
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
get '/json' do
  Message.all.map { |m| m.to_json }.to_json
end

# Creates a new Message
post '/messages' do
  Message.all << Message.new(params['message'])
  redirect '/'
end
