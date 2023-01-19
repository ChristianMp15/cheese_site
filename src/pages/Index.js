import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const people = useLoaderData();
    const [image, setImage] = React.useState('');
    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form
                onSubmit={(event) => {
                    setImage('')
                }}
                action="/create"
                method="post"
            >
                <input type="input" name="name" placeholder="cheese name" />
                <input
                    type="text"
                    name="image"
                    placeholder="cheese picture"
                    value={image}
                    onChange={e => {
                        setImage(e.target.value)
                    }}
                />
                <input type="input" name="title" placeholder="cheese title" />

                <input type="submit" value="create cheese" />
            </Form>

            <h2>Cheese</h2>
            {people.map((cheese) => (
                <div>
                    <Link to={`/${cheese._id}`} className="cheese">
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name} />
                    <h3>{cheese.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Index;