import { useState } from 'react';
import { Users, Calendar, BookOpen, TrendingUp, User, LogOut, Plus, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { trainingSessions, techniques, belts, TrainingSession } from '../data/judoData';

interface SenseiDashboardProps {
  username: string;
  onLogout: () => void;
}

export function SenseiDashboard({ username, onLogout }: SenseiDashboardProps) {
  const [activeView, setActiveView] = useState<'overview' | 'students' | 'sessions'>('overview');
  const [sessions, setSessions] = useState<TrainingSession[]>(trainingSessions);
  const [showSessionForm, setShowSessionForm] = useState(false);
  const [newSession, setNewSession] = useState({
    title: '',
    instructor: '',
    location: '',
    day: '',
    time: '',
    description: '',
    recommendations: ['']
  });

  // Datos de ejemplo para el sensei
  const totalStudents = 42;
  const activeStudents = 38;
  const upcomingSessions = sessions.length;
  const totalTechniques = techniques.length;

  // Estadísticas por cinturón
  const beltDistribution = [
    { belt: 'Blanco', count: 8, color: '#FFFFFF' },
    { belt: 'Amarillo', count: 6, color: '#FFD700' },
    { belt: 'Naranja', count: 7, color: '#FF8C00' },
    { belt: 'Verde', count: 9, color: '#228B22' },
    { belt: 'Azul', count: 6, color: '#1E90FF' },
    { belt: 'Marrón', count: 4, color: '#8B4513' },
    { belt: 'Negro', count: 2, color: '#000000' },
  ];

  // Estudiantes de ejemplo
  const recentStudents = [
    { name: 'Juan Pérez', belt: 'Verde', lastAttendance: 'Hace 2 días' },
    { name: 'María González', belt: 'Azul', lastAttendance: 'Hace 1 día' },
    { name: 'Carlos Rodríguez', belt: 'Amarillo', lastAttendance: 'Hoy' },
    { name: 'Ana Martínez', belt: 'Naranja', lastAttendance: 'Hace 3 días' },
    { name: 'Luis Hernández', belt: 'Verde', lastAttendance: 'Hoy' },
  ];

  const handleAddRecommendation = () => {
    setNewSession({
      ...newSession,
      recommendations: [...newSession.recommendations, '']
    });
  };

  const handleRemoveRecommendation = (index: number) => {
    setNewSession({
      ...newSession,
      recommendations: newSession.recommendations.filter((_, i) => i !== index)
    });
  };

  const handleRecommendationChange = (index: number, value: string) => {
    const updatedRecommendations = [...newSession.recommendations];
    updatedRecommendations[index] = value;
    setNewSession({
      ...newSession,
      recommendations: updatedRecommendations
    });
  };

  const handleCreateSession = () => {
    const session: TrainingSession = {
      id: `s${sessions.length + 1}`,
      title: newSession.title,
      instructor: newSession.instructor,
      location: newSession.location,
      day: newSession.day,
      time: newSession.time,
      description: newSession.description,
      recommendations: newSession.recommendations.filter(r => r.trim() !== '')
    };

    setSessions([...sessions, session]);
    setShowSessionForm(false);
    setNewSession({
      title: '',
      instructor: '',
      location: '',
      day: '',
      time: '',
      description: '',
      recommendations: ['']
    });
  };

  const isFormValid = () => {
    return newSession.title.trim() !== '' &&
           newSession.instructor.trim() !== '' &&
           newSession.location.trim() !== '' &&
           newSession.day.trim() !== '' &&
           newSession.time.trim() !== '' &&
           newSession.description.trim() !== '' &&
           newSession.recommendations.some(r => r.trim() !== '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Usuario - Esquina Superior Izquierda */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-full">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">{username}</span>
                <span className="text-xs text-blue-600 font-medium">Sensei / Entrenador</span>
              </div>
            </div>

            {/* Nombre del Club - Centro */}
            <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">JUDO ITM</h1>
              <p className="text-xs text-center text-slate-600">Panel de Instructor</p>
            </div>

            {/* Botón de Salir */}
            <Button variant="outline" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Salir</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Estadísticas Principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Estudiantes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                {activeStudents} activos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sesiones Programadas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingSessions}</div>
              <p className="text-xs text-muted-foreground">
                Esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Técnicas Registradas</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTechniques}</div>
              <p className="text-xs text-muted-foreground">
                7 cinturones
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">
                Asistencia promedio
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de Navegación */}
        <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="students">Estudiantes</TabsTrigger>
            <TabsTrigger value="sessions">Sesiones</TabsTrigger>
          </TabsList>

          {/* Vista General */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Distribución por Cinturones */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribución de Estudiantes por Cinturón</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {beltDistribution.map((item) => (
                      <div key={item.belt} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full border-2 border-slate-300"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm font-medium">{item.belt}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(item.count / totalStudents) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8 text-right">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actividad Reciente */}
              <Card>
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-200 p-2 rounded-full">
                            <User className="w-4 h-4 text-slate-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{student.name}</p>
                            <p className="text-xs text-slate-600">Cinturón {student.belt}</p>
                          </div>
                        </div>
                        <span className="text-xs text-slate-500">{student.lastAttendance}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Vista de Estudiantes */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Estudiantes</CardTitle>
                <p className="text-sm text-slate-600">
                  Lista completa de estudiantes registrados en el club
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentStudents.concat(recentStudents).map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-200 p-2 rounded-full">
                          <User className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-slate-600">Cinturón {student.belt}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Perfil
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vista de Sesiones */}
          <TabsContent value="sessions">
            {showSessionForm ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Crear Nueva Sesión de Entrenamiento</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSessionForm(false)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Título */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Título de la Sesión *</Label>
                      <Input
                        id="title"
                        placeholder="Ej: Entrenamiento Básico"
                        value={newSession.title}
                        onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                      />
                    </div>

                    {/* Instructor */}
                    <div className="space-y-2">
                      <Label htmlFor="instructor">Instructor *</Label>
                      <Input
                        id="instructor"
                        placeholder="Ej: Sensei Carlos Rodríguez"
                        value={newSession.instructor}
                        onChange={(e) => setNewSession({ ...newSession, instructor: e.target.value })}
                      />
                    </div>

                    {/* Lugar */}
                    <div className="space-y-2">
                      <Label htmlFor="location">Lugar del Entrenamiento *</Label>
                      <Input
                        id="location"
                        placeholder="Ej: Dojo Principal - ITM Campus"
                        value={newSession.location}
                        onChange={(e) => setNewSession({ ...newSession, location: e.target.value })}
                      />
                    </div>

                    {/* Día y Hora */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="day">Día de la Semana *</Label>
                        <Select
                          value={newSession.day}
                          onValueChange={(value) => setNewSession({ ...newSession, day: value })}
                        >
                          <SelectTrigger id="day">
                            <SelectValue placeholder="Seleccionar día" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Lunes">Lunes</SelectItem>
                            <SelectItem value="Martes">Martes</SelectItem>
                            <SelectItem value="Miércoles">Miércoles</SelectItem>
                            <SelectItem value="Jueves">Jueves</SelectItem>
                            <SelectItem value="Viernes">Viernes</SelectItem>
                            <SelectItem value="Sábado">Sábado</SelectItem>
                            <SelectItem value="Domingo">Domingo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Horario *</Label>
                        <Input
                          id="time"
                          placeholder="Ej: 18:00 - 20:00"
                          value={newSession.time}
                          onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe el enfoque y objetivos de esta sesión de entrenamiento..."
                        rows={3}
                        value={newSession.description}
                        onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
                      />
                    </div>

                    {/* Recomendaciones */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Recomendaciones para los Estudiantes *</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleAddRecommendation}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Agregar
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {newSession.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              placeholder="Ej: Recuerda llevar tu judogi limpio"
                              value={rec}
                              onChange={(e) => handleRecommendationChange(index, e.target.value)}
                            />
                            {newSession.recommendations.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleRemoveRecommendation(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={handleCreateSession}
                        disabled={!isFormValid()}
                        className="flex-1"
                      >
                        Crear Sesión
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowSessionForm(false)}
                        className="flex-1"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <CardTitle>Sesiones de Entrenamiento</CardTitle>
                      <p className="text-sm text-slate-600 mt-1">
                        Gestiona las sesiones de entrenamiento programadas
                      </p>
                    </div>
                    <Button onClick={() => setShowSessionForm(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Nueva Sesión
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sessions.map((session) => (
                      <Card key={session.id} className="border-2">
                        <CardHeader>
                          <CardTitle className="text-base">{session.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <User className="w-4 h-4" />
                            <span>{session.instructor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span>{session.day} - {session.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 mt-2">{session.description}</p>
                          <Button variant="outline" size="sm" className="w-full mt-3">
                            Ver Asistentes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}