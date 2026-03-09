import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import { ClipboardList, ArrowLeft, BookOpen, Layers } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { playPopSound } from "@/hooks/useAudio";
import { latihanMandiriStructure, Topic } from "@/data/latihanMandiriStructure";

type ViewState = "kelas" | "topics" | "subtopics";

const LatihanMandiriPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewState>("kelas");
  const [selectedKelas, setSelectedKelas] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleKelasSelect = (kelas: string) => {
    playPopSound();
    setSelectedKelas(kelas);
    setView("topics");
  };

  const handleTopicSelect = (topic: Topic) => {
    playPopSound();
    setSelectedTopic(topic);
    setView("subtopics");
  };

  const handleSubtopicSelect = (topicSlug: string, subtopicSlug: string) => {
    playPopSound();
    navigate(`/latihan-mandiri/${topicSlug}/${subtopicSlug}`);
  };

  const handleBack = () => {
    playPopSound();
    if (view === "subtopics") {
      setView("topics");
      setSelectedTopic(null);
    } else if (view === "topics") {
      setView("kelas");
      setSelectedKelas(null);
    } else {
      navigate("/menu");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      
      <div className="relative z-10 max-w-4xl w-full px-4 py-10">
        <div className="text-center mb-8">
          <ClipboardList className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan mb-2">
            LATIHAN MANDIRI
          </h1>
          <p className="text-muted-foreground text-sm font-body">
            {view === "kelas" && "Pilih tingkatan kelas kamu"}
            {view === "topics" && `Materi Matematika ${selectedKelas}`}
            {view === "subtopics" && `Subtopik: ${selectedTopic?.label}`}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> {view === "kelas" ? "Kembali ke Menu" : "Kembali"}
          </button>
          
          {selectedKelas && (
            <div className="flex items-center gap-2 text-xs text-white/40 font-display uppercase tracking-wider">
              <span>/</span>
              <span className="text-white/60">{selectedKelas}</span>
              {selectedTopic && (
                <>
                  <span>/</span>
                  <span className="text-primary truncate max-w-[150px]">{selectedTopic.label}</span>
                </>
              )}
            </div>
          )}
        </div>

        {view === "kelas" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-slide-up">
            {Object.keys(latihanMandiriStructure).map((kelas, i) => (
              <button
                key={kelas}
                onClick={() => handleKelasSelect(kelas)}
                className="group relative bg-card/80 backdrop-blur border border-border rounded-xl p-8 
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300 
                  cursor-pointer text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <ClipboardList className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{kelas}</h3>
                <p className="text-xs text-muted-foreground mt-2 font-body">
                  {latihanMandiriStructure[kelas].length} Topik Pembelajaran
                </p>
              </button>
            ))}
          </div>
        )}

        {view === "topics" && selectedKelas && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto animate-slide-up">
            {latihanMandiriStructure[selectedKelas].map((topic, i) => (
              <button
                key={topic.slug}
                onClick={() => handleTopicSelect(topic)}
                className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                  cursor-pointer text-left"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-bold text-white truncate group-hover:text-primary transition-colors">
                    {topic.label}
                  </h3>
                  <p className="text-[10px] text-white/40 mt-1 uppercase tracking-tighter">
                    {topic.subtopics.length} SUBTOPIK
                  </p>
                </div>
                <Layers className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>
        )}

        {view === "subtopics" && selectedTopic && (
          <div className="flex flex-col gap-3 max-w-2xl mx-auto animate-slide-up">
            {selectedTopic.subtopics.map((sub, i) => (
              <button
                key={sub.slug}
                onClick={() => handleSubtopicSelect(selectedTopic.slug, sub.slug)}
                className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                  cursor-pointer text-left"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary/30">
                  <span className="text-xs font-display text-white/40 group-hover:text-primary transition-colors">{i + 1}</span>
                </div>
                <span className="font-body text-sm text-white/90 group-hover:text-white transition-colors">{sub.label}</span>
                <span className="ml-auto text-[10px] text-accent font-display border border-accent/30 px-2 py-0.5 rounded uppercase tracking-wider">
                  Buka
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatihanMandiriPage;
