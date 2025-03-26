/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/TutorialDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RenderBlock from "../components/TradutorJSON";
import LoadingScreen from "../components/Loading";
import { motion } from "framer-motion";

interface Post {
  title: string;
  author: string;
  date: string;
  content: Content;
}

interface Content {
  blocks: Block[];
  entityMap: any[]; // Pode ser ajustado conforme necessário
}

interface Block {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: any[]; // Pode ser mais específico dependendo do uso
  entityRanges: any[];
  data: any[]; // Pode ser ajustado conforme necessário
}

const TutorialDetail: React.FC = () => {
  const [tutorial, setTutorial] = useState<{ file: string }[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postAutor, setPostAutor] = useState<string>("");
  const [postDate, setPostDate] = useState<string>("");
  const { id } = useParams<{ id: string }>();

  const myId = id || "";
  const nameBeforeDot = myId.split(".")[0];

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch("/index/tutorial/index.json");
        if (!response.ok) throw new Error("Erro ao carregar tutorial");
        const data = await response.json();
        setTutorial(data);
      } catch (error) {
        setError("Erro ao carregar tutorial: " + error);
        setLoading(false);
      }
    };

    fetchTutorial();
  }, []);

  const project = tutorial.find((p) => p.file === nameBeforeDot);

  useEffect(() => {
    const fetchPostsRender = async () => {
      if (!project) {
        return <div>Projeto não encontrado</div>;
      }
      const filePath = `/tutorial/${project.file}.json`;

      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Erro ao carregar os posts");
        }
        const data = await response.json();

        if (data) {
          setPosts([data]); // Transforma o objeto em um array com um único item
          setPostTitle(data.title);
          setPostAutor(data.author);
          setPostDate(data.date);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPostsRender();
  }, [project]);

  // Renderização condicional
  if (loading) return <LoadingScreen />;
  if (error) return <div>Erro: {error}</div>;
  if (!project) return <div>Projeto não encontrado</div>;

  const formatarData = (dataString: string) => {
    // Divide a data para garantir que o formato seja "YYYY-MM-DD"
    const [ano, mes, dia] = dataString.split("-");

    // Formata a data no formato "dd/mm/yyyy"
    const data = dia + "/" + mes + "/" + ano;

    return data;
  };

  return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.03 }}
      >
    <div className="lg:pt-10 lg:pb-10 text-gray-300">
      <div className="flex flex-col pt-10 pb-10 lg:p-10 items-center bg-gray-700 bg-cover bg-center lg:rounded-lg shadow-2xl max-w-3xl mx-auto">
        {posts.length > 0 ? (
          <>
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.03 }}
              >
                <h1 className="flex justify-center items-start text-3xl font-bold text-gray-300">
                  {postTitle}
                </h1>
                <p className="flex justify-center items-start p-6 text-gray-300">
                  Postado: {formatarData(postDate)} por {postAutor}
                </p>
              </motion.div>
            </div>
            <div className="prose pl-10 pr-10 flex flex-col">
              {posts[0].content.blocks.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: index * 0.09 }}
                >
                  <div key={index}>
                    <RenderBlock block={block} />
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div>Nenhum post encontrado.</div>
        )}
      </div>
    </div>
    </motion.div>
  );
};

export default TutorialDetail;
