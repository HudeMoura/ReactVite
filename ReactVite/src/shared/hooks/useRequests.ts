/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'post',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('UErro');
      });
  };

  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios({
      method: 'get',
      url: url,
      data: body,
    })
      .then((result) => {
        alert('Login');
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });

      setLoading(false);
      return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
