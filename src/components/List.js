const list = [
    {
	title: 'React',
	url: 'https://reactjs.org/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID: 0,
    },
    {
	title: 'Redux',
	url: 'https://redux.js.org/',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID: 1,
    },
];

const List = () => {
      return (
	<div className="cards">
	  {
	      list.map((item) => {
		  return (
		      <div className="card" key={item.objectID}>
			<span>
			    <a href={item.url} target="_blank">{item.title}</a>
			</span>
			<span>Author: {item.author}</span>
			<span>Num comments: {item.num_comments}</span>
			<span>Points: {item.points}</span>
		      </div>
		  );
	      })
	  }
	</div>
      );
    }

export default List;
