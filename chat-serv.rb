# Simple Sinatra app to test/demo js-chat.
%w(
  rubygems
  sinatra
  json
  haml
).each { |dependency| require dependency }

# Basic example Message class.
class Message
  attr_accessor :name, :body

  def initialize(attrs = {})
    @name = attrs['name'] || attrs[:name]
    @body = attrs['body'] || attrs[:body]
  end

  def to_s
    "[#{name}]: #{body}"
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
  3.times do |i|
    attrs = { 'name' => "test-#{i}", 'body' => "content for #{i}" }
    Message.all << Message.new(attrs)
  end
end

get '/' do
  headers 'Content-Type' => 'text/html; charset=utf-8'
  @messages = Message.all
  haml :home
end

get '/json' do
  Message.all.map { |m| m.to_json }.to_json
end

post '/messages' do
  Message.all << Message.new(params['message'])
  redirect '/'
end

use_in_file_templates!

__END__
@@ layout
%html
  %head
    %title js-chat / chat-serv

  %body
    = yield

@@ home
%h1
  js-chat / chat-serv

%div
  #actions
    %input{:id => 'refresh-chat', :type => 'submit', :value => 'Refresh'}

  - @messages.each do |message|
    %h3= message.name
    %p= message.body
