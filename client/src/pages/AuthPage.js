import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Fab, Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useAuthContext } from '../contexts/authContext';
import ROUTES from '../globals/routes';
import axios from '../utils/axiosConfig';
import useStyles from './style';


export default function AuthPage() {
  const classes = useStyles();
  const { logout, isAuthorized, name } = useAuthContext();
  const [files, setFiles] = useState(null);
  const [form, setForm] = useState({
    shoesName: '',
    type: '',
    collectionName: '',
    price: '',
    sizes: '',
    description: '',
    color: '',
  sa:''
  });

  const handleLogout = () => {
    logout();
  };

  const handleInputText = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSelectFile = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmitFile = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('image', files[i]);
    }
    for (let key in form) {
      formData.append(key, form[key]);
    }
    axios.post('/api/shoes/add', formData);
  };

  if (!isAuthorized) return <Redirect to={ROUTES.login} />;
  return (
    <div className={classes.root} >
      <h1>{name}</h1>
      <Button color="primary" variant="contained" component="span" onClick={handleLogout}>Logout</Button>
      <div className={classes.form}>
        <div className={classes.formColumn}>
          <TextField name='shoesName' value={form.shoesName} label="Name" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <TextField name='type' value={form.type} label="Type" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <TextField name='collectionName' value={form.collectionName} label="Collection" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <TextField name='price' value={form.price} label="Price" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
        </div>
        <div className={classes.formColumn}>
          <TextField name='sizes' value={form.sizes} label="Sizes" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <TextField name='description' value={form.description} label="Description" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <TextField name='color' value={form.color} label="Color" variant="outlined" margin="normal" onChange={handleInputText} className={classes.inputText}/>
          <label htmlFor="upload-photo">
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleSelectFile}
              multiple
            />
            <Fab
              className={classes.fab}
              color="primary"
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddIcon /> Upload photos
            </Fab>
            {files && files.length > 0 && <span>{'Number of files: ' + files.length}</span>}
          </label>
        </div>
      </div>
        <Button className={classes.submit} color="primary" variant="contained" component="span" onClick={handleSubmitFile}>
          SUBMIT
        </Button>
    </div>
  );
}
