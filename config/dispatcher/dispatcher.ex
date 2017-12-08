defmodule Dispatcher do
  use Plug.Router

  def start(_argv) do
    port = 80
    IO.puts "Starting Plug with Cowboy on port #{port}"
    Plug.Adapters.Cowboy.http __MODULE__, [], port: port
    :timer.sleep(:infinity)
  end

  plug Plug.Logger
  plug :match
  plug :dispatch

  # Resource routes
  match "/catalogs/*path" do
    Proxy.forward conn, path, "http://resource/catalogs/"
  end
  match "/datasets/*path" do
    Proxy.forward conn, path, "http://resource/datasets/"
  end
  match "/distributions/*path" do
    Proxy.forward conn, path, "http://resource/distributions/"
  end
  match "/agents/*path" do
    Proxy.forward conn, path, "http://resource/agents/"
  end
  match "/publishers/*path" do
    Proxy.forward conn, path, "http://resource/publishers/"
  end
  match "/graph/*path" do
    Proxy.forward conn, path, "http://graph-identifier/"
  end



  match _ do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end

end
