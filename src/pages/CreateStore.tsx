import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Check, Upload, Store, Palette, FileText, Settings, Sparkles } from "lucide-react";
import { toast } from "sonner";

const COLOR_THEMES = [
  { id: "violet", name: "Violet", primary: "263 70% 60%", secondary: "243 75% 65%" },
  { id: "emerald", name: "Emerald", primary: "160 84% 39%", secondary: "158 64% 52%" },
  { id: "amber", name: "Amber", primary: "38 92% 50%", secondary: "43 96% 56%" },
  { id: "rose", name: "Rose", primary: "350 89% 60%", secondary: "355 78% 65%" },
  { id: "cyan", name: "Cyan", primary: "189 94% 43%", secondary: "197 92% 61%" },
  { id: "gray", name: "Gray", primary: "220 9% 46%", secondary: "215 14% 34%" },
];

const CATEGORIES = [
  "Digital Products",
  "Design & Art",
  "Gaming",
  "Education",
  "Music & Audio",
  "Software & Tools",
  "Content & Media",
  "Other",
];

const PRODUCT_TYPES = [
  { id: "digital", label: "Digital Files", description: "eBooks, templates, assets" },
  { id: "subscription", label: "Subscriptions", description: "Recurring access or content" },
  { id: "discord", label: "Discord Access", description: "Private community access" },
];

const PAYMENT_GATEWAYS = [
  { id: "monetik", label: "Monetik", fee: "2.5%" },
  { id: "slip2pay", label: "Slip2Pay", fee: "3%" },
];

export default function CreateStore() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Form state
  const [formData, setFormData] = useState({
    storeName: "",
    username: "",
    category: "",
    logo: null as File | null,
    banner: null as File | null,
    themeColor: "violet",
    slogan: "",
    description: "",
    productTypes: [] as string[],
    paymentGateway: "",
  });

  // Username validation state
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const generateUsername = (storeName: string) => {
    return storeName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .substring(0, 20);
  };

  const checkUsernameAvailability = async (username: string) => {
    if (!username || username.length < 3) {
      setUsernameAvailable(null);
      return;
    }

    setCheckingUsername(true);
    // Simulate API check
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Mock: usernames starting with "test" are taken
    setUsernameAvailable(!username.startsWith("test"));
    setCheckingUsername(false);
  };

  const handleStoreNameChange = (name: string) => {
    updateFormData("storeName", name);
    if (name && !formData.username) {
      const generatedUsername = generateUsername(name);
      updateFormData("username", generatedUsername);
      checkUsernameAvailability(generatedUsername);
    }
  };

  const handleUsernameChange = (username: string) => {
    updateFormData("username", username);
    checkUsernameAvailability(username);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.storeName && formData.username && usernameAvailable && formData.category;
      case 2:
        return formData.themeColor;
      case 3:
        return formData.slogan && formData.description;
      case 4:
        return formData.productTypes.length > 0 && formData.paymentGateway;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      toast.success("Progression sauvegardée");
    } else {
      toast.error("Veuillez remplir tous les champs requis");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handlePublish = (isDraft: boolean) => {
    toast.success(isDraft ? "Boutique sauvegardée en brouillon" : "🎉 Votre boutique est publiée !");
    setTimeout(() => {
      navigate(`/@${formData.username}`);
    }, 1500);
  };

  const selectedTheme = COLOR_THEMES.find((t) => t.id === formData.themeColor) || COLOR_THEMES[0];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au dashboard
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Créer votre boutique</h1>
          <p className="text-muted-foreground">Configurez votre boutique en quelques étapes simples</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Étape {currentStep} sur {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  {currentStep === 1 && <Store className="h-5 w-5 text-primary" />}
                  {currentStep === 2 && <Palette className="h-5 w-5 text-primary" />}
                  {currentStep === 3 && <FileText className="h-5 w-5 text-primary" />}
                  {currentStep === 4 && <Settings className="h-5 w-5 text-primary" />}
                  {currentStep === 5 && <Sparkles className="h-5 w-5 text-primary" />}
                  <div>
                    <CardTitle>
                      {currentStep === 1 && "Informations de base"}
                      {currentStep === 2 && "Visuel & identité"}
                      {currentStep === 3 && "Présentation"}
                      {currentStep === 4 && "Paramètres de vente"}
                      {currentStep === 5 && "Validation"}
                    </CardTitle>
                    <CardDescription>
                      {currentStep === 1 && "Les informations essentielles de votre boutique"}
                      {currentStep === 2 && "Personnalisez l'apparence de votre boutique"}
                      {currentStep === 3 && "Décrivez votre boutique à vos clients"}
                      {currentStep === 4 && "Configurez vos options de paiement"}
                      {currentStep === 5 && "Vérifiez et publiez votre boutique"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="storeName">
                        Nom de la boutique <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="storeName"
                        placeholder="Ma Boutique Digitale"
                        value={formData.storeName}
                        onChange={(e) => handleStoreNameChange(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">
                        Nom d'utilisateur <span className="text-destructive">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                          <Input
                            id="username"
                            className="pl-7"
                            placeholder="myboutique"
                            value={formData.username}
                            onChange={(e) => handleUsernameChange(e.target.value)}
                          />
                        </div>
                        {usernameAvailable !== null && !checkingUsername && (
                          <Badge variant={usernameAvailable ? "default" : "destructive"}>
                            {usernameAvailable ? <Check className="h-3 w-3" /> : "Pris"}
                          </Badge>
                        )}
                        {checkingUsername && <Badge variant="outline">...</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground">Ex: @mydigitalshop</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Catégorie <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {/* Step 2: Visual Identity */}
                {currentStep === 2 && (
                  <>
                    <div className="space-y-2">
                      <Label>Logo</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Cliquez pour uploader un logo</p>
                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG jusqu'à 2MB</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Bannière</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Cliquez pour uploader une bannière</p>
                        <p className="text-xs text-muted-foreground mt-1">Recommandé: 1200x400px</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        Thème de couleur <span className="text-destructive">*</span>
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {COLOR_THEMES.map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => updateFormData("themeColor", theme.id)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.themeColor === theme.id
                                ? "border-primary shadow-lg scale-105"
                                : "border-border hover:border-muted-foreground"
                            }`}
                          >
                            <div className="flex gap-2 mb-2">
                              <div
                                className="h-8 flex-1 rounded"
                                style={{ backgroundColor: `hsl(${theme.primary})` }}
                              />
                              <div
                                className="h-8 flex-1 rounded"
                                style={{ backgroundColor: `hsl(${theme.secondary})` }}
                              />
                            </div>
                            <p className="text-sm font-medium">{theme.name}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Presentation */}
                {currentStep === 3 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="slogan">
                        Slogan <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="slogan"
                        placeholder="Des produits digitaux de qualité"
                        value={formData.slogan}
                        onChange={(e) => updateFormData("slogan", e.target.value)}
                        maxLength={100}
                      />
                      <p className="text-xs text-muted-foreground">{formData.slogan.length}/100 caractères</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Description complète <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Parlez de votre boutique, vos produits, votre expertise..."
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        rows={8}
                        maxLength={1000}
                      />
                      <p className="text-xs text-muted-foreground">{formData.description.length}/1000 caractères</p>
                    </div>
                  </>
                )}

                {/* Step 4: Sales Settings */}
                {currentStep === 4 && (
                  <>
                    <div className="space-y-3">
                      <Label>
                        Type de produits <span className="text-destructive">*</span>
                      </Label>
                      {PRODUCT_TYPES.map((type) => (
                        <div key={type.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                          <Checkbox
                            id={type.id}
                            checked={formData.productTypes.includes(type.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                updateFormData("productTypes", [...formData.productTypes, type.id]);
                              } else {
                                updateFormData(
                                  "productTypes",
                                  formData.productTypes.filter((t) => t !== type.id)
                                );
                              }
                            }}
                          />
                          <div className="flex-1">
                            <label htmlFor={type.id} className="text-sm font-medium cursor-pointer">
                              {type.label}
                            </label>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Label>
                        Passerelle de paiement <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.paymentGateway}
                        onValueChange={(value) => updateFormData("paymentGateway", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir une passerelle" />
                        </SelectTrigger>
                        <SelectContent>
                          {PAYMENT_GATEWAYS.map((gateway) => (
                            <SelectItem key={gateway.id} value={gateway.id}>
                              {gateway.label} - Frais: {gateway.fee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-4 bg-muted rounded-lg space-y-2">
                      <p className="text-sm font-medium">Aperçu des commissions</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Commission Tunisell:</span>
                          <span className="font-medium">5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Frais de paiement:</span>
                          <span className="font-medium">
                            {formData.paymentGateway
                              ? PAYMENT_GATEWAYS.find((g) => g.id === formData.paymentGateway)?.fee
                              : "-"}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border">
                          <span className="font-medium">Total des frais:</span>
                          <span className="font-medium text-primary">
                            {formData.paymentGateway
                              ? `~${
                                  5 +
                                  parseFloat(
                                    PAYMENT_GATEWAYS.find((g) => g.id === formData.paymentGateway)?.fee || "0"
                                  )
                                }%`
                              : "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 5: Validation */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-card rounded-lg border">
                        <h3 className="font-semibold mb-3">Récapitulatif</h3>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Nom:</dt>
                            <dd className="font-medium">{formData.storeName}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Username:</dt>
                            <dd className="font-medium">@{formData.username}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Catégorie:</dt>
                            <dd className="font-medium">{formData.category}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Thème:</dt>
                            <dd className="font-medium">{selectedTheme.name}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Types de produits:</dt>
                            <dd className="font-medium">{formData.productTypes.length} sélectionnés</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Paiement:</dt>
                            <dd className="font-medium">
                              {PAYMENT_GATEWAYS.find((g) => g.id === formData.paymentGateway)?.label}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm text-primary font-medium mb-2">✨ Votre boutique est prête !</p>
                        <p className="text-sm text-muted-foreground">
                          Vous pouvez la publier maintenant ou la sauvegarder en brouillon pour continuer plus tard.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => handlePublish(true)}>
                        Sauvegarder en brouillon
                      </Button>
                      <Button className="flex-1" onClick={() => handlePublish(false)}>
                        Publier maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour
                  </Button>
                )}
                <Button className="flex-1" onClick={handleNext} disabled={!canProceed()}>
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aperçu en direct</CardTitle>
                <CardDescription>Voici comment votre boutique apparaîtra</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Preview Banner */}
                  <div
                    className="h-32 rounded-lg flex items-center justify-center text-white font-medium"
                    style={{
                      background: `linear-gradient(135deg, hsl(${selectedTheme.primary}), hsl(${selectedTheme.secondary}))`,
                    }}
                  >
                    {formData.storeName || "Nom de la boutique"}
                  </div>

                  {/* Preview Logo & Info */}
                  <div className="flex gap-4">
                    <div
                      className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                      style={{ backgroundColor: `hsl(${selectedTheme.primary})` }}
                    >
                      {formData.storeName?.[0]?.toUpperCase() || "?"}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{formData.storeName || "Nom de la boutique"}</h3>
                      <p className="text-sm text-muted-foreground">@{formData.username || "username"}</p>
                      {formData.category && (
                        <Badge variant="outline" className="mt-1">
                          {formData.category}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Preview Slogan */}
                  {formData.slogan && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm italic">&ldquo;{formData.slogan}&rdquo;</p>
                    </div>
                  )}

                  {/* Preview Description */}
                  {formData.description && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">À propos</h4>
                      <p className="text-sm text-muted-foreground line-clamp-4">{formData.description}</p>
                    </div>
                  )}

                  {/* Preview Product Types */}
                  {formData.productTypes.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Types de produits</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.productTypes.map((type) => (
                          <Badge key={type} style={{ backgroundColor: `hsl(${selectedTheme.primary})` }}>
                            {PRODUCT_TYPES.find((t) => t.id === type)?.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
