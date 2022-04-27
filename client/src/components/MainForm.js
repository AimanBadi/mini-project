import React, { useCallback, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

import { extractText } from './requests';

function MainForm() {
  const [text, setText] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(async file => {
      const data = await extractText(file);
      setText(data);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Flex
      justify="center"
      align="center"
      textAlign="center"
      bg="#dadada"
      w={250}
      h={250}
      p={50}
      m={2}
      borderRadius={5}
      {...getRootProps()}
    >
      <input {...getInputProps()} type="file" name="image" />
      {isDragActive ? (
        <Text>Drop the files here...</Text>
      ) : (
        <Text>Drag 'n' drop some files here, or click to select files</Text>
      )}

      <Text>{text}</Text>
    </Flex>
  );
}

export default MainForm;
