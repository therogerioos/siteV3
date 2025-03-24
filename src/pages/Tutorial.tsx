import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "animate.css";
import NotFound404 from "../components/NotFound404";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


interface Post {
  id: string;
  title: string;
  resume: string;
  image: string;
  file: string;
  tecnologia: string[];
}

const Tutorial: React.FC = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [resultados, setResultados] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    // Função para buscar o arquivo index.json
    const fetchPosts = async () => {
      try {
        const response = await fetch('/index/tutorial/index.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setResultados(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (busca.trim() === "") {
      setResultados(posts); // Se o campo de busca estiver vazio, mostra todos os posts
    } else {
      setResultados(
        posts.filter(post =>
          post.title.toLowerCase().includes(busca.toLowerCase()) ||
          post.tecnologia.some(tec => tec.toLowerCase().includes(busca.toLowerCase()))
        )
      );
    }
  }, [busca, posts]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="bg-gray-200 w-[100%]"><NotFound404/></div>;
  }

  // Função para mudar a página
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // Lógica para paginar os projetos
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = resultados.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
      },
      background: {
        default: "#181C23",
        paper: "#fff",
      },
      text: {
        primary: "#ffff",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: "#181C23",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              '&::placeholder': {
                color: "#fff",
              },
              "& fieldset": {
                borderColor: "#a6a6a6",
                color: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
                color: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
                color: "#fff",
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            borderRadius: "4px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
          },
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "center",
            marginTop: "16px", // Ajuste conforme necessário
          },
          ul: {
            display: "flex",
            gap: "8px", // Espaçamento entre os itens da paginação
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#181C23", // Fundo escuro para os itens da paginação
            color: "#fff", // Cor do texto
            borderRadius: "4px",
            padding: "8px 16px", // Tamanho do botão
            transition: "background-color 0.3s ease, color 0.3s ease", // Efeito suave para transições
            "&:hover": {
              backgroundColor: "#fff", // Fundo branco ao passar o mouse
              color: "#181C23", // Cor do texto ao passar o mouse
            },
            "&.Mui-selected": {
              backgroundColor: "#808080", // Cor de fundo para item selecionado
              color: "#fff", // Cor do texto para item selecionado
            },
          },
        },
      },
    },
  });
  

  return (
    <div className="p-10">
<ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <TextField
          label="Pesquisar"
          variant="outlined"
          size="small"
          color="primary"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          focused
          sx={{
            width: "50%",
            input: {
              color: "white", // Cor do texto digitado
              "&::placeholder": {
                color: "#fff", // Cor do placeholder com transparência
                opacity: 1, // Garante que a cor seja aplicada corretamente no MUI
              },
            }
          }}
        />

      </div>
      
      <div className="flex items-center justify-center flex-wrap gap-4">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#181C23] m-5 min-w-[95%] sm:min-w-[500px] rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-101 animate__animated animate__zoomIn"
          >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-45 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.resume}</p>
              <Link
                to={`/tutorial/${project.file}`}
                className="text-blue-300 hover:text-blue-100 font-semibold"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-3 mt-6">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(resultados.length / projectsPerPage)} // Total de páginas
            page={currentPage} // Página atual
            onChange={handlePageChange} // Função chamada quando muda a página
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
      </ThemeProvider>
    </div>
  );
};

export default Tutorial;
