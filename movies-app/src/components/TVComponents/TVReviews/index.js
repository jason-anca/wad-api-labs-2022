import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getTVReviews } from "../../../api/tmdb-api";
import { excerpt } from "../../../util";

export default function TVReviews({ tv }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getTVReviews(tv.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(reviews)
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            {/* <TableCell align="right">More</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell >{excerpt(r.content)}</TableCell>
              {/* <TableCell >
              <Link
                  to={`/reviews/${r.id}`}
                  state={{
                      review: r,
                      tv: tv,
                  }}
                >
                  Full Review
                </Link>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}