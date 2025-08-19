import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { Star, Heart, Leaf, ArrowRight, Sparkles } from 'lucide-react'

interface ModernProductCardProps {
  product: {
    name: string
    description: string
    image?: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    color?: string
    features: string[]
    rating?: number
    price?: string
    category?: string
    specifications?: {
      protein?: string
      fat?: string
      fiber?: string
      moisture?: string
    }
    benefits?: string[]
  }
  type?: 'oil' | 'cake'
  className?: string
}

export const ModernProductCard: React.FC<ModernProductCardProps> = ({
  product,
  type = 'oil',
  className = ''
}) => {
  const IconComponent = product.icon

  return (
    <Card className={`group relative overflow-hidden bg-white/70 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${className}`}>
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-300" />
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-500" />
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping opacity-0 group-hover:opacity-100 delay-700" />
      </div>

      {type === 'cake' && product.image ? (
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          {product.category && (
            <Badge className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white border-0 shadow-lg">
              <Sparkles className="w-3 h-3 mr-1" />
              {product.category}
            </Badge>
          )}
        </div>
      ) : (
        <CardHeader className="text-center pb-4 relative">
          {IconComponent && (
            <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${product.color || 'from-emerald-500 to-emerald-600'} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
              <IconComponent className="w-10 h-10 text-white drop-shadow-sm" />
            </div>
          )}
          {product.rating && (
            <div className="flex items-center justify-center space-x-1 mb-3">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
            </div>
          )}
        </CardHeader>
      )}

      <CardHeader className={type === 'cake' ? 'pt-4' : 'pt-0'}>
        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
          {product.name}
        </CardTitle>
        {product.price && (
          <div className="text-right">
            <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <CardDescription className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {product.description}
        </CardDescription>

        {/* Specifications for cake products */}
        {product.specifications && (
          <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 p-4 rounded-xl border border-emerald-100">
            <h4 className="font-semibold text-emerald-800 mb-3 text-sm flex items-center">
              <Leaf className="w-4 h-4 mr-2" />
              Nutritional Specs
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center bg-white/50 rounded-lg p-2">
                  <span className="text-slate-600 capitalize">{key}:</span>
                  <span className="font-semibold text-emerald-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-800 text-sm flex items-center">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            Key Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <Badge 
                key={idx}
                variant="secondary" 
                className="text-xs bg-white/80 text-slate-700 border border-emerald-200 hover:bg-emerald-50 transition-colors duration-200"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Benefits for cake products */}
        {product.benefits && (
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-800 text-sm flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Benefits
            </h4>
            <div className="space-y-1">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-600">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Button 
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
          >
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
