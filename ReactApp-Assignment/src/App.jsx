import React, { useState, useEffect } from "react";
import { Card, CardMedia, Grid, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './App.css';

function App() {
  const original_data = {
    Romance: [
      { title: "Crash Landing on You", image: "https://upload.wikimedia.org/wikipedia/en/6/64/Crash_Landing_on_You_main_poster.jpg" },
      { title: "My Love from the Star", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/You_Who_Came_From_the_Stars_Cover.jpg" },
      { title: "Goblin", image: "https://i.pinimg.com/originals/5b/fe/6e/5bfe6e9399ed9aecfbefd33719a27364.jpg" },
      { title: "Descendants of the Sun", image: "https://0.soompi.io/wp-content/uploads/2016/04/05024759/Song-Hye-Kyo-Song-Joong-Ki1.jpg" },
      { title: "The Heirs", image: "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Inheritors_poster.jpg" },
      { title: "Boys Over Flowers", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Boys_Over_Flowers_%28TV_series%29_poster.jpg" },
      { title: "Hotel Del Luna", image: "https://m.media-amazon.com/images/M/MV5BNWU3M2YxZmEtZTZiMi00NTBhLWEyYWMtOTBhOTEyMzkyYmI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg" },
      { title: "Vincenzo", image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg" },
      { title: "Twenty-Five-Twenty-One", image: "https://i.namu.wiki/i/ruRMIZbWCb7MNLkadU8QnpDE3sX4LtSuBT1WRDUfztF4P_vu4v4hXiHLVZk5ulJUd2t2aMnAjyGHlhDjF-f20g.webp" },
      { title: "It's Okay to Not Be Okay", image: "https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg" },
      { title: "While You Were Sleeping", image: "https://m.media-amazon.com/images/M/MV5BMmQzYmFjZjktMWJlYy00Y2VkLTk4YjktODQ3MGQ4MDE0NDIzXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_QL75_UY281_CR3,0,190,281_.jpg" }
    ],
    Action: [
      { title: "Vagabond", image: "https://asianwiki.com/images/f/f9/Vagabond_%28Korean_Drama%29-P1.jpg" },
      { title: " { title: "Squid Game", image: "https://asianwiki.com/images/f/f9/Vagabond_%28Korean_Drama%29-P1.jpg" }," },
      { title: "The K2", image: "https://m.media-amazon.com/images/M/MV5BMGI1MDIzNTItMzg1ZS00MmFkLWFlZDEtYmVmZWVkMDZkM2U3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" },
      { title: "City Hunter", image: "https://m.media-amazon.com/images/M/MV5BMDQ1ZjY2NGYtYmI2NS00MmJhLWJlNjgtMTk5MDNjZDVmNjM0XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg" },
      { title: "Healer", image: "https://m.media-amazon.com/images/M/MV5BZDJhMDI5MWYtOTUxMS00ZDk1LWExMDItNTZmNWJiZjhkMzdhXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_FMjpg_UX1000_.jpg" },
      { title: "Iris", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/IRIS_Intertitle.jpg/220px-IRIS_Intertitle.jpg" },
      { title: "Athena: Goddess of War", image: "https://upload.wikimedia.org/wikipedia/en/b/be/Athena_promotional_poster.png" },
      { title: "Rugal", image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Rugal_2020.jpg" },
      { title: "My Name", image: "https://m.media-amazon.com/images/M/MV5BYTA1OTQzYTYtNDAwOC00OTk0LTkxZDktMmVlNTc1OWExMzA5XkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_FMjpg_UX1000_.jpg" },
      { title: "Black Knight", image: "https://upload.wikimedia.org/wikipedia/en/2/23/Black_Knight_%28TV_Series%29.jpg" }
    ],
    Comedy: [
      { title: "Strong Woman Do Bong Soon", image: "https://upload.wikimedia.org/wikipedia/en/2/28/StrongWomanDoBong-soon_%28Main_poster%29.jpg" },
      { title: "Welcome to Waikiki", image: "https://m.media-amazon.com/images/M/MV5BMTkwZmM2N2MtZTBjYy00ODM1LTgxNTAtOTc1OWI0MzRkMTJjXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_QL75_UY281_CR5,0,190,281_.jpg" },
      { title: "The Sound of Your Heart", image: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Sound_Of_Your_Heart_poster.jpg" },
      { title: "My ID is Gangnam Beauty", image: "https://m.media-amazon.com/images/M/MV5BNTYwZmU4ZDktNzQ2MC00Mjc5LWJhMzAtZDU4NGMwYWI5NjYwXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_.jpg" },
      { title: "Weightlifting Fairy Kim Bok Joo", image: "https://i.pinimg.com/550x/0f/58/d8/0f58d89b2fbae4cd5a6f152c6b478769.jpg" },
      { title: "The Fiery Priest", image: "https://m.media-amazon.com/images/M/MV5BNmJjMWNkOTctMTE4ZS00MTJlLWEyZjAtOThjMDM0Njk2MTMwXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_QL75_UX190_CR0,1,190,281_.jpg" },
      { title: "Mr Queen", image: "https://i.mydramalist.com/qPA42_4f.jpg" },
    ],
    Thriller: [
      { title: "Stranger", image: "https://m.media-amazon.com/images/M/MV5BZWQ3MmFiNTctMzZkMS00NGY1LWI3ZTEtZjM4ZjJlY2VmMjY3XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_.jpg" },
      { title: "Tunnel", image: "https://asianwiki.com/images/d/d4/Tunnel_%28Korean_Drama%29-p1.jpg" },
      { title: "Voice", image: "https://asianwiki.com/images/a/ae/Voice_%28Korean_Drama%29-p1.jpg" },
      { title: "Save Me", image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Save_Me_Poster.jpg" },
      { title: "Kingdom", image: "https://m.media-amazon.com/images/M/MV5BNTBlZmE4YzItNTY5Mi00NmIxLTlhZTAtOWIxNjFlNTMzNmI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
      { title: "Signal", image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Signal_Korean_Drama.jpg" },
      { title: "The Guest", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/The_Guest_%28TV_Series%29.jpg/220px-The_Guest_%28TV_Series%29.jpg" },
      { title: "Mouse", image: "https://asianwiki.com/images/b/b0/Mouse-Korean_Drama-P2.jpg" },
      { title: "Sweet Home", image: "https://m.media-amazon.com/images/M/MV5BNWNjMmQ4MzgtOWY2Ny00MTRhLWI3MmYtOWQ1NWJhMjk4MjQyXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_.jpg" },
      { title: "Hellbound", image: "https://m.media-amazon.com/images/M/MV5BNzU1ODk0ZWUtMzdkYS00YmI2LWI1NjItOTg0NjQxNGY5MmNlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" }
    ]
  };

  const [data, setData] = useState(original_data.Romance);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4); 
  const [genre, setGenre] = useState("Romance");

  useEffect(() => {
    const filteredData = original_data[genre].filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search, genre]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4); 
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setVisibleCount(4); 
  };

  return (
    <div style={{ textAlign: "center", margin: "2%" }}>
      <FormControl sx={{ minWidth: 120, marginBottom: "20px" }}>
        <InputLabel>Genre</InputLabel>
        <Select
          value={genre}
          onChange={handleGenreChange}
          label="Genre"
        >
          {Object.keys(original_data).map((genre) => (
            <MenuItem value={genre} key={genre}>{genre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Search Your Korean Drama"
        variant="outlined"
        sx={{ width: "300px", height: "50px", marginBottom: "20px", marginLeft: "20px" }} // Adjusted the marginLeft for spacing
        onChange={(event) => setSearch(event.target.value)}
      />
      <Grid container spacing={2}>
        {data.slice(0, visibleCount).map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
              <Card>
                <CardMedia
                  component="img"
                  image={item.image}
                  title={item.title}
                  className="card-media"
                  sx={{ height: 300, objectFit: "cover" }}
                />
              </Card>
              <h2>{item.title}</h2>
            </Grid>
          );
        })}
      </Grid>
      {visibleCount < data.length && (
        <Button
        variant="contained"
        onClick={handleLoadMore}
        sx={{
          marginTop: "20px",
          backgroundColor: "dodgerblue", 
          color: "white",  
          "&:hover": { 
            backgroundColor: "royalblue", 
          },
        }}
      >
        Load More
      </Button>
      
      )}
    </div>
  );
}

export default App;
