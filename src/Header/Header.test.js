import React from 'react';
import Header from './Header';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, getByLabelText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';