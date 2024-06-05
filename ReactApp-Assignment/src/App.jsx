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
      { title: "Business Proposal", image: "data:image/jpeg;base64,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" },
      { title: "It's Okay to Not Be Okay", image: "https://m.media-amazon.com/images/M/MV5BYTk0Nzk5ZWYtYTNlZi00YjBjLWJhYjctMWMwMmYyMDA5ZjJmXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg" },
      { title: "While You Were Sleeping", image: "https://m.media-amazon.com/images/M/MV5BMmQzYmFjZjktMWJlYy00Y2VkLTk4YjktODQ3MGQ4MDE0NDIzXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_QL75_UY281_CR3,0,190,281_.jpg" }
    ],
    Action: [
      { title: "Vagabond", image: "https://asianwiki.com/images/f/f9/Vagabond_%28Korean_Drama%29-P1.jpg" },
      { title: "The K2", image: "https://m.media-amazon.com/images/M/MV5BMGI1MDIzNTItMzg1ZS00MmFkLWFlZDEtYmVmZWVkMDZkM2U3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" },
      { title: "City Hunter", image: "https://m.media-amazon.com/images/M/MV5BMDQ1ZjY2NGYtYmI2NS00MmJhLWJlNjgtMTk5MDNjZDVmNjM0XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg" },
      { title: "Healer", image: "https://m.media-amazon.com/images/M/MV5BZDJhMDI5MWYtOTUxMS00ZDk1LWExMDItNTZmNWJiZjhkMzdhXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_FMjpg_UX1000_.jpg" },
      { title: "Iris", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/IRIS_Intertitle.jpg/220px-IRIS_Intertitle.jpg" },
      { title: "Athena: Goddess of War", image: "https://upload.wikimedia.org/wikipedia/en/b/be/Athena_promotional_poster.png" },
      { title: "Rugal", image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Rugal_2020.jpg" },
      { title: "My Name", image: "https://m.media-amazon.com/images/M/MV5BYTA1OTQzYTYtNDAwOC00OTk0LTkxZDktMmVlNTc1OWExMzA5XkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_FMjpg_UX1000_.jpg" },
      { title: "Black Knight", image: "https://upload.wikimedia.org/wikipedia/en/2/23/Black_Knight_%28TV_Series%29.jpg" }
      { title: "Taxi Driver", image: "https://m.media-amazon.com/images/I/51k66hvD3MS._AC_UF894,1000_QL80_.jpg" }
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
