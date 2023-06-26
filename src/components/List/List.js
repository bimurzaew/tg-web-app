import React, {useEffect, useState} from 'react';
import styles from './List.module.css'

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    },[])

    return (
        <div className={styles.wrapper}>
            <h1>Лидерборд</h1>
            <table className={styles.table}>
                <tbody>
                {data.map(item => {
                    return <tr>
                        <td>{item.username}</td>
                        <td>15 000 000</td>
                        <td>{item.id}</td>
                    </tr>
                })}
                </tbody>
            </table>
            <button className={styles.button}>Забрать награду</button>
        </div>
    );
};

export default MyComponent;
