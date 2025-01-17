import { useEffect, React } from "react"
import { Routes } from '../../routes';
import { useNavigate } from "react-router-dom";

const Introduction = () => {
    const useDocumentTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    useDocumentTitle('Εισαγωγή');
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Project 3</h1>
            <div style={styles.names}>
                <p>Thodoris Minaidis</p>
                <p>Argiro Zisi</p>
                <p>Thomas Karagiannis</p>
            </div>
            <p style={styles.description}>
                Για την εργασία προσπαθήσαμε να χωρίσουμε το project σε τρια κομμάτια. 
            </p>
            <p style={styles.description}>
                Ο θοδωρής ανέλαβε την δημιουργία του project, την 
                δημιουργία git repository καθώς και των κατάλληλων branches, καθώς και τις σελίδες μέχρι το login, και όλες όσες αγορούν
                τον επαγγελματία <b>(δηλαδή από το κουμπί Αίτηση για την παροχή της υπηρεσίας φύλαξης και την επιλογή επιμελητή /τριας
                    (ωφελούμενο πρόσωπο)</b> και μετά). Επίσης δημιούργησε αυτό το introduction, όπως και άλλες απαραίτητες λειτουργίες, όπως
                το Routing, Breadcrumb, NavBar, Footer.
            </p>

            <button style={styles.button} onClick={() => navigate(Routes.Home) }>Start</button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '50px auto',
        maxWidth: '800px',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '7px',
        border: '2px solid #357EBD',
        paddingBottom: '20px',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    names: {
        marginBottom: '20px',
        fontSize: '1.2rem',
    },
    description: {
        fontSize: '1rem',
        color: '#666',
        width: '100%',
        padding: '2px 20px',
    },
    button: {
        background: '#357EBD',
        color: 'white',
        border: '2px solid #357EBD',
        padding: '8px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default Introduction;
