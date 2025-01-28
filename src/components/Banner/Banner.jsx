

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/MPYrsGn/cody-board-UMl-XDGx-Y6-Kc-unsplash-2-1.jpg"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className="h-[300px] border-2 space-y-7">
            <h1 className="text-5xl font-bold w-[500px]">Books to freshen up <br />your bookshelf</h1>
            
            <button className="btn btn-success text-xl font-bold w-[250px]">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;